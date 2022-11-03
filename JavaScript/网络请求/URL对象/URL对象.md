# URL 对象

内建的 URL 类提供了用于创建和解析 URL 的便捷接口。



## 创建

```js
new URL(url, [base]);
```

- url：完整的 URL，或者仅仅路径（设置了 base）。
- base：可选的 base URL，如果设置了此参数，且参数 url 只有路径，则会根据这个 base 生成 URL。



## 🌰例子

```js
let url = new URL('https://javascript.info/profile/admin');
```

下面这两个 URL 是一样的：

```js
let url1 = new URL('https://javascript.info/profile/admin');
let url2 = new URL('/profile/admin', 'https://javascript.info');
alert(url1); // https://javascript.info/profile/admin
alert(url2); // https://javascript.info/profile/admin
```

可以根据相对于现有 URL 的路径轻松创建一个新的 URL：

```js
let url = new URL('https://javascript.info/profile/admin');
let newUrl = new URL('tester', url);
alert(newUrl); // https://javascript.info/profile/tester
```

URL 对象立即允许我们访问其组件，因此这是一个解析 url 的好方法，例如：

```js
let url = new URL('https://javascript.info/url');

console.log(url.protocol); // https
console.log(url.host); // javascript.info
console.log(url.pathname); // url
```



![image-20221102142402737](.\URL对象.assets\image-20221102142402737.png)



## Search Params

- append(name, value) —— 按照 name 添加参数。
- delete(name) —— 按照 name 移除参数。
- get(name) —— 按照 name 获取参数。
- getAll(name) —— 获取相同 name 的所有参数（这是可行的，例如 ? user=John&user=Pete ）。
- has(name) —— 按照 name 检查参数是否存在。
- set(name, value) —— set/replace 参数。
- sort() —— 按 name 对参数进行排序，很少使用。
- ……并且它是可迭代的，类似于 Map 。

```js
let url = new URL('https://google.com/search');

// 参数会自动编码
url.searchParams.set('q', 'test me!');
console.log(url); // https://google.com/search?q=test+me%21

url.searchParams.set('tbs', 'qdr:y');
console.log(url); // https://google.com/search?q=test+me%21&tabs=qdr%3Ay

// 遍历参数（会自动解码）
for(let [name, value] of url.searchParams) {
  console.log(name, value); // q test me!   tbs qdr:y
}
```



## 编码（encoding）

那些不允许作为 url 字符的必须被编码，例如非拉丁字母和空格 —— 用其 UTF-8 代码代替，前缀为 %，例如 %20（由于历史原因，空格可以用+编码，但这是一个例外）。

**URL 对象会自动进行编码。**

如果使用字符串，则需要**手动编码**。

- encodeURL —— 编码整个 URL。
- decodeURL ——  解码为编码前的状态。
- encodeURLComponent —— 编码 URL 组件，例如搜索参数，或者 hash，或者 pathname。
- decodeURLComponent —— 解码为编码前的状态。

> encodeURL **vs** encodeURLComonent
>
> - encodeURI 仅编码 URL 中完全禁止的字符。
> - encodeURIComponent 也编码这类字符，此外，还编码 # ， $ ， & ， + ， , ， / ， : ， ; ， = ， ? 和 @ 字符。



## 🌰例子

对于一个 URL 整体，可以使用 encodeURL。

```js
let url = encodeURI('http://site.com/привет');
alert(url); // http://site.com/%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82
```

对于 URL 参数，我们应该改用 encodeURIComponent。

```js
let music = encodeURIComponent('Rock&Roll');
let url = `https://google.com/search?q=${music}`;
alert(url); // https://google.com/search?q=Rock%26Roll
```

如果使用 encodeURL。

```js
let music = encodeURI('Rock&Roll');
let url = `https://google.com/search?q=${music}`;
alert(url); // https://google.com/search?q=Rock&Roll
```

可以看到， encodeURI 没有对 & 进行编码，因为它对于整个 URL 来说是合法 的字符。