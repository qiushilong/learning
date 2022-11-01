# FormData

FormData 是表示 HTML 表单数据的对象。



## 构造函数

```js
let formData = new FormData([form]);
```

如果提供了 HTML form 元素，它会自动捕捉 form 元素字段。

FormData 的特殊之处在于网络方法（network methods），例如 fetch 可以接受一个 FormData 对象作为 body。它会被编码并发送出去，带有 Content-Type：multipart/form-data。



## 使用

```html
<form id="formElem">
  <input type="text" name="name" value="john">
  <input type="text" name="surname" value="smith">
  <input type="submit">
</form>

<script>
  formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('/post/user',{
      method:"POST",
      body: new FormData(formElem)
    })

    let result = await response.json();
    console.log(result)
  }
</script>
```



## 方法

- formData.append(name, value)：添加具有给定 name 的 value。
- formData.append(name, blob, fileName)：添加一个字段，就像它是 \<input type="file"> 设置文件名（不是表单字段名），因为它是用户文件系统中文件的名称。
- formData.delete(name)：移除带有给定 name 的字段。
- formData.get(name)：获取带有给定 name 的字段值。
- formData.has(name) ：如果存在带有给定 name 的字段，则返回 true ，否则返回 false 。

从技术上来讲，一个表单可以包含多个具有相同 name 的字段。因此，多次调用 append 将会添加多个具有相同名称的字段。 

还有一个 set 方法，语法与 append 相同。不同之处在于 .set 移除所有具有给 定 name 的字段，然后附加一个新字段。