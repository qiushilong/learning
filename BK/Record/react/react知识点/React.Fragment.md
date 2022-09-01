## React.Fragment

v16.2.0 引入

React.Fragment可以让你聚合一个子元素列表，但是在DOM中不增加额外节点。

<></>是<React.Fragment></React.Fragment>的语法糖，但是<></>不能接受键值和属性。



```js
<React.Fragment>
	<div>1</div>
	<div>2</div>
</React.Fragment>
// 或者简写
<>
	<div>1</div>
	<div>2</div>
</>

// 转成DOM后
<div>1</div>
<div>2</div>
```



v16.0.0 时有一种方式也可以在不生成DOM的同时包裹子元素。

```js
[
    <div>1</div>,
	<div>2</div>
]
```

##### 缺点：

- 数组中的子数组之间必须用逗号分隔。
- 数组中的子数组必须有一个键来防止React的键警告。
- 字符串必须用引号括起来。

