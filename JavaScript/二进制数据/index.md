# Blob

Blob（binary large object，即二进制大对象），它是 JavaScript 中的一个对象，表示 [MIME](https://baike.baidu.com/item/MIME/2900607?fr=aladdin) 类型的文件数据。

> MDN：Blob 对象表示一个不可变，原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换为 [ReadableStream](https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream) 来用于数据操作。

Blob 由一个可选的字符串 type（通常是 MIME 类型）和 blobParts 组成。

Blob = type + data。

## 创建 Blob

```js
new Blob(array, options);
```

- array：由 ArrayBuffer，ArrayBufferView，Blob，String 等对象构成，将会被放入 Blob。
- options：可选的属性：
  - type：默认为空串，表示放入 Blob 的数据内容的 MIME 类型。
  - endings：默认为 "transparent"，用于指定包含结束符 \n 的字符如何被写入。

![img](https://dl4.weshineapp.com/gif/20170703/7095ecb405a142ad26e08973281922d7.gif?f=micro_5qCX5a2Q)

```js
const blob = new Blob(['hello blob!'], { type: 'text/plain' });
```



Blob 对象上有两个属性：

- size：Blob 对象中所包含数据的大小（字节）。
- type：字符串，该 Blob 对象所包含的 MIME 类型。如果类型未知，则为空字符串。



```js
const blob = new Blob(['hello blob!'], { type: 'text/plain' });
console.log(blob.size); // 11
console.log(blob.type); // "text/plain"
```



注意，字符串 “Hello World” 是 UTF-8 编码的，因此它的每个字符占用 1 个字节。

