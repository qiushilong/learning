# localStorage 和 sessionStorage

...



Web 存储对象 localStorage 和 sessionStorage 允许我们在浏览器中保存键值对。

- key 和 value 都必须是字符串。
- 存储大小限制为 5 MB+，具体取决于浏览器。
- 它们不会过期。
- 数据绑定到源（域/端口/协议）。

| localStorage                           | sessionStorage                                           |
| -------------------------------------- | -------------------------------------------------------- |
| 在同源的所有标签页和窗口之前共享数据。 | 在当前浏览器标签页中可见，包括同源的 iframe。            |
| 浏览器重启后数据仍然保留。             | 页面刷新后数据仍然存在（但标签页关闭后数据则不再保存）。 |



**API：**

- setItem(key, value) —— 存储键/值对。
- getItem(key, value) —— 按照键获取值。
- removeItem(key) —— 删除键及其对应的值。
- clear() —— 删除所有数据。
- key(index) —— 获取该索引下的键名。
- length —— 存储的内容的长度。
- 使用 Object.keys 来获取所有的键。
- 我们将键作为对象属性来访问，在这种情况下，不会触发 storage 事件。



**Storage 事件：**

- 在调用 setItem，removeItem，clear 方法后触发。
- 包含有关操作的所有数据（key/oldValue/newValue)，文档 url 和存储对象 storageArea。
- 在所有可以访问到存储对象的 window 对象上触发，导致当前数据改变的 window 对象除外（对于 sessionStorage 是在当前标签页下，对于 localStorage 是在全局，即所有同源的窗口）。

```js
window.onstorage = event => {
  console.log(event.key + ':' + event.newValue + 'at' + event.url);
}

localStorage.setItem('now', Date.now());
```

