# Blob

ArrayBuffer 和视图都是 ECMA 标准的一部分，是 JavaScript 的一部分。

在浏览器中，还有其他更高级的对象，特别是 Blob，在 File API 中有相关描述。

Blob 由一个可选的字符串 type（通常是 MIME 类型）和 blobParts 组成 —— 一系列其他 Blob 对象，字符串和 BufferSource。

![](./img/Blob.png)

构造语法为：

```js
new Blob(blobParts, options);
```

- blobParts 是 Blob/BufferSource/String 类型的值的数组。
- options 可选对象：
  - type —— Blob 类型，通常是 MIME 类型，例如 image/png。
  - endings —— 是否转换换行符，使 Blob 对应于当前操作系统的换行符（\r\n 或 \n）。默认为 “transparent”（啥也不做），不过也可以是 “native”（转换）。

例如：

```js
// 从字符串创建 Blob
let blob = new Blob(['<html></html>'], { type: 'text/html' });
// 注意第一个字段必须是一个数组
```

```js
// 从类型化数组和字符串创建 Blob
let hello = new Uint8Array([72, 101, 108, 108, 111]);
let blob = new Blob([hello, ' ', 'world'], { type: 'text/plain' });
```

我们可以用 slice 方法来提取 Blob 片段：

```js
blob.slice([byteStart], [byteEnd], [contentType]);
```

- byteStart —— 起始字节，默认为 0。
- byteEnd —— 最后一个字节（专有，默认为最后）。
- contentType —— 新 blob 的 type ，默认与源 blob 相同。

参数值类似于 array.slice ，也允许是负数。

> ⚠️Blob 对象是不可改变的
>
> 我们无法直接在 Blob 中更改数据，但我们可以通过 slice 获得 Blob 的多 个部分，从这些部分创建新的 Blob 对象，将它们组成新的 Blob ，等。 这种行为类似于 JavaScript 字符串：我们无法更改字符串中的字符，但可以生成 一个新的改动过的字符串。



## Blob 作用 URL

Blob 可以很容易用作 \<a> \<img> 或其他标签的 URL，来显示它们的内容。

多亏了 type，让我们也可以下载/上传 Blob 对象，而在网络请求中，type 自然的变成了 Content-Type。

让我们从一个简单的例子开始。通过点击链接，你可以下载一个具有动态生成的内容 为 hello world 的 Blob 的文件：

```html
<!-- download 特性（attribute） 强制浏览器下载而不是导航 -->
<a download="hello.txt" href="#" id="link">Download</a>

<script>
  let blob = new Blob(['hello,world!'], { type:'text/plain' });
  link.herf = URL.createObjectURL(blob);
</script>
```

我们也可在 JavaScript 中动态创建一个连接，通过 link.click() 模拟一个点击，然后便自动下载。

```js
let link = document.createElement('a');
link.download = 'hello.txt';
let blob = new Blob(['hello,world'],{type:'text/plain'});
link.href = URL.createObjectURL(blob);
link.click();
URL.revokeObjectURL(link.href);
```

URL.createObjectURL 取一个 Blob，并为其创建一个唯一的 URL，形式为 blob：\<origin>/\<uuid>。

也就是 link.href 的值的样子：

```bash
blob:https://ba...
```

浏览器内部为每个通过 URL.createObjectURL 生成的 URL 存储了一个 URL -> Blob 的映射。因此，此类 URL 很短，但可以访问 Blob。

生成的 URL 仅在
