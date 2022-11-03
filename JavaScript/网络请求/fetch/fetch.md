# Fetch

fetch 方法是一种现代通用的请求方法。旧版本的浏览器可能不支持它（可以 polyfill）。

![](./img/gif1.gif)



## 语法

```js
let promise = fetch(url, [options]);
```

- url：要访问的 url。
- options：可选参数，如 method，header 等。

没有 options，那就是一个简单的 GET 请求，下载 url 的内容。



## 阶段

**第一阶段：**当服务器发送了响应头（response header），fetch 返回的 promise 就使用内建的 reponse class 对象对响应头进行解析。

可以通过检查响应头，检查 HTTP 状态以确定请求是否成功，当前还没有响应体（response body）。

response 属性：

- status：HTTP 状态码。
- ok：布尔值，如果 HTTP 状态码为 200 - 209，则为 true。

```js
let response = await fetch(url); // 第一阶段

if(response.ok) {
  let json = await response.json(); // 第二阶段
} else {
  console.log("HTTP-ERROR：" + response.status);
}
```



**第二阶段：**为了获取 response body，我们需要使用一个其他的方法调用。

- response.text()：读取 response，并以文本方式返回。
- response.json()：解析为 JSON。
- response.formData()：以 FormData 的形式返回。
- response.blob()：以 Blob 形式返回。
- response.arrayBuffer()：以 ArrayBuffer 形式返回。
- 另外，response.body 是 ReadableStream 读写，允许逐块读取 body。



> ⚠️注意：如果我们已经使用了一种方法获取 response，再使用其他方法获取，则不会生效，因为 body 内容已经被处理过了。



## 写法

**async/await**

```js
async function demo() {
  const url = "...";
	const response = await fetch(url);

	const commits = await response.json();
	console.log(commits);
}

demo();
```



**promise**

```js
const url = "...";

fetch(url).then(res => res.json()).then(res => {
  console.log(res);
})
```



## Header

### request header

通过 headers 设置。

```js
const response = fetch(url, {
  headers: {
    Authentication: 'secret'
  }
})
```

有些 header 保证了 HTTP 的正确性和安全性，所以它们仅由浏览器控制。

### response header

响应头位于 response.headers 中的一个类似于 Map 的 header 对象。

```js
const response = await fetch('...');

console.log(response.headers.get('Content-Type'));

for(let [key, value] of response.headers) {
  console.log(`${key} = ${value}`);
}
```



## POST

- method：HTTP 方法，例如 POST。
- body：
  - 字符串（例如 JSON编码的）。
  - FormData 对象，以 form/multipart 形式发送数据。
  - Blob/BufferSource 发送二进制数据。
  - URLSearchParams，以 x-www-form-urlencoded 编码形式发送数据。（不常用）



```js
const user = {
  name: 'john',
  surname: 'smith'
}

const resposne = await fetch('/../', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
})

let result = await response.json();
console.log(result.message);
```

> ⚠️注意：如果请求的 body 是字符串，则 Content-Type 会默认设置为 text/plain;charset=UTF-8。
>
> 但是当我们发送 JSON 时，会使用 headers 选项来发送 application/json，则才是 JSON 正确的 Content-Type。



## 进度

要跟踪下载进度，可以使用 response.body 属性。它是 ReadablelStream，一个特殊对象。它可以逐块提供 body。

response.body 给予了对进度读取的完全控制，我们可以随时计算下载了多少。

```html
<script>
	async function demo() {
		const response = await fetch("https://dl4.weshineapp.com/gif/20170228/e060adb43c788e234fae7d8dc90e4369.gif?f=micro_6auY5YW0");

		const reader = response.body.getReader();
		const contentLength = +response.headers.get("Content-Length");
		let downloadLength = 0;

		while (true) {
			const { done, value } = await reader.read();

			if (done) {
				break;
			}
			downloadLength += value.length;

			console.log(
				`Received ${value.length} bytes, total ${contentLength} bytes`
			);
			console.log(
				`download precent: ${(downloadLength * 100) / contentLength}%`
			);
		}
	}
	demo();
</script>

```

await reader.read() 调用的结果是一个具有两个属性的对象：

- done：当读取完成时为 true，否则为 false。
- value：字节的类型化数组 —— Uint8Array。



## 中止（Abort）

JavaScript 通常并没有 “中止” promise 的概念。

存在一个特殊的内建对象：AbortController。它不仅可以终止 fetch，还可以中止其他异步任务。



**创建 AbortController 对象**

```js
let controller = new AbortController();
```

控制器是一个极其简单的对象。

- 它具有单个方法 abort()。
- 和单个属性 signal，我们可以在这个属性上设置时间监听器。

当 abort() 调用时：

- controller.signal 就会触发 abort 事件。
- controller.signal.aborted 属性变为 true。



**使用步骤**

1. 一个可取消的操作，它在 controller.signal 上设置一个监听器。
2. 取消操作，在需要的时候调用 controller.abort()。

```js
let controller = new AbortController(); // 新建
let signal = controller.signal();

signal.addEventListener('abort', () => console.log('abort'));

constroller.abort(); // 中止操作

console.log(signal.aborted); // true
```



**中止 fetch**

```js
let controller = new AbortController();
setTimeout(() => {
  controller.abort();
}, 1000);

try {
  fetch('././', {
    signal: controller.signal
  });
}catch(err) {
  ...
}
```

