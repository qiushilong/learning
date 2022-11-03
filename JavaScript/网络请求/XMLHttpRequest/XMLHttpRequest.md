# XMLHttpRequest

XMLHttpRequest 是一个内建的浏览器对象，它允许使用 JavaScript 发送 HTTP 请求。

现如今，我们有一个更为现代的方法叫做 fetch ，它的出现使得 XMLHttpRequest 在某种程度上被弃用。

在现代 Web 开发中，出于以下三种原因，我们还在使用 XMLHttpRequest：

- 历史原因：我们需要支持现有的使用了 XMLHttpRequest 的脚本。
- 我们需要兼容旧浏览器，并且不想用 polyfill（例如使脚本更小）。
- 我们需要做一些 fetch 目前无法做到的事情，例如跟踪上传进度。



XMLHttpRequest 有两种执行模式：同步和异步。



## 异步请求

1. 创建 XMLHttpRequest：

   ```js
   let xhr = new XMLHttpRequest();
   ```

   此构造器没有参数。

2. 初始化，通常在 new 之后：

   ```js
   xhr.open(method, URL, [async, user, password])
   ```

   - method：HTTP 方法。通常使用 "GET" 或者 "POST"。
   - URL：要请求的 URL，通常是一个字符串，也可以是 URL 对象。
   - async：如果显式地设置为 false，那么请求会以同步的方式处理。
   - user，password：HTTP 基本身份验证的登录名和密码。

   ⚠️ open 调用与其名称相反，不会建立连接。它仅配置请求，而网络活动仅以 send 调用开启。

3. 发送请求。

   ```js
   xhr.send([body]);
   ```

   这个方法会建立连接，并将请求发送到服务器。可选参数 body 包含了 request body。

   一些请求方法，像 GET 没有 request body。还有一些请求方法，像 POST 使用 body 将数据发送到服务器。

4. 监听 xhr 事件以获取响应。

   常用：

   - load：当请求完成（即使 HTTP 状态为 400 或 500 等），并且响应已完全下载。
   - error：当无法发出请求，例如网络终端或者无效 URL。
   - progress：在下载响应期间触发，报告已经下载了多少。

   ```js
   xhr.onload = function() {
     console.log(`Loaded: ${xhr.status} ${xhr.response}`);
   }
   
   xhr.onerror = function() {
     console.log('Network Error');
   }
   
   xhr.onprogress = function(event) {
     console.log(`Received ${event.loaded} of ${event.total}`);
   }
   ```

   



## 响应内容

**status**

HTTP 状态码：200，404，403 等，如果出现非 HTTP 错误，则为 0。

**statusText**

HTTP 状态消息：状态 200 对应 OK，404 对应 Not Found，403 对应 Forbidden。

**response**

服务器响应体。



## 响应类型

可以使用 xhr.responseType 属性来设置响应格式。

- ""：默认为空字符串。
- "text"：响应格式为字符串。
- "arrayBuffer"：响应格式为 ArrayBuffer。
- "blob"：响应格式为 Blob。
- "document"：响应格式为 XML document。
- "json"：响应格式为 JSON。

```js
let xhr = new XMLHttpRequest();
xhr.open('GET', '/article/xmlhttprequest/example/json');
xhr.responseType = 'json';
xhr.send();
// 响应为 {"message": "Hello, world!"}
xhr.onload = function() {
let responseObj = xhr.response;
alert(responseObj.message); // Hello, world!
};
```



## readyState

XMLHttpRequest 的状态（state）会随着它的处理进度变化而变化。可以通过 xhr.readyState 来了解当前状态。

```js
UNSENT = 0; // 初始状态
OPEND = 1; // open 被调用
HEADERS_RECEIVED = 2; // 接受到 response header
LOADING = 3; // 响应正在被加载
DONE = 4; // 请求完成
```

XMLHttpRequest 对象以 0 → 1 → 2 → 3 → … → 3 → 4 的顺序在它们之间 转变。每当通过网络接收到一个数据包，就会重复一次状态 3 。

```js
xhr.onreadystatechange = function() {
  if(xhr.readyState === 3) {
    // 加载中
  }
  if(xhr.readyState === 4) {
    // 请求完成
  }
}
```



## 中止请求

我们可以随时终止请求。调用 xhr.abort() 即可：

```js
xhr.abort(); // 终止请求
```

它会触发 abort 事件，且 xhr.status 变为 0。



## 同步请求

如果在 open 方法中将第三个参数 async 设置为 false，那么请求就会以同步的方式进行。

换句话说，JavaScript 执行在 send() 处暂停，并在收到响应后恢复执行。类似 alert 和 prompt 命令。

```js
let xhr = new XMLHttpRequest();
xhr.open('GET', '/user', false);

try {
  xhr.send();
  if(xhr.status !== 200) {
    console.log(`Error ${xhr.status}：${xhr.statusText}`);
  } else {
    console.log(xhr.response);
  }
} catch(error) {
  console.log('Request failed');
}
```



## header

XMLHttpRequest 允许发送自定义 header，并且可以从响应中读取 header。

HTTP-header 有三种方法：



**setRequestHeader(name, value)**

使用给定的 name 和 value 设置 request header。

```js
xhr.setRequestHeader('Content-Type', 'application/json');
```



> ⚠️ 注意：
>
> - 一些 header 是由浏览器专门管理的，例如 Referer 和 Host 。为了用户安全和请求的正确性， XMLHttpRequest 不允许更改它们。
> - XMLHttpRequest 的另一个特点是不能撤销 setRequestHeader 。 一旦设置了 header，就无法撤销了。其他调用会向 header 中添加信息，但不会 覆盖它。



**getResponseHeader(name)**

获取具有给定 name 的 header（ Set-Cookie 和 Set-Cookie2 除外）。

```js
xhr.getResponseHeader('Content-Type')
```



**getAllResponseHeaders()**

返回除 Set-Cookie 和 Set-Cookie2 外的所有 response header。



## POST，FormData

要建立一个 POST 请求，可以使用内建的 FormData 对象。

```html
<form name="person">
  <input name="name" value="John">
  <input name="surname" value="Smith">
</form>
<script>
  // 从表单预填充 FormData
  let formData = new FormData(document.forms.person);
  // 附加一个字段
  formData.append("middle", "Lee");
  // 将其发送出去
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/article/xmlhttprequest/post/user");
  xhr.send(formData);
  xhr.onload = () => alert(xhr.response);
</script>
```



## 上传进度

progress 事件仅在下载阶段触发。

也就是说：如果我们 POST 一些内容，XMLHttpRequest 首先上传我们的数据（request body），然后下载响应。

如果我们要上传的东西很大，那么我们肯定会对跟踪上传进度感兴趣。但是 xhr.onprogress 在这里并不起作用。

这里有另外一个对象，它没有方法，专门用来跟踪上传事件：xhr.upload。

它会生成事件，类似与 xhr，但是 xhr.upload 仅在上传时触发它们：

- loadstart：上传开始。
- progress：上传期间定期触发。
- abort：上传中止。
- error：非 HTTP 错误。
- load：上传成功完成。
- timeout：上传超时（如果设置了 timeout 属性）。
- loadend：上传完成，无论成功还是 error。

handler 示例：

```js
xhr.upload.onprogress = function(event) {
  console.log(`Uploaded ${event.loaded} of ${event.total} bytes`);
};

xhr.upload.onload = function() {
  console.log('Uploaded finished successfully.');
}

xhr.upload.onerror = function() {
  console.log(`Error during the upload: ${xhr.status}`);
}
```



## 跨域请求

