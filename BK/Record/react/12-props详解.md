## props详解

#### children属性（类似vue的插槽）

- children属性：表示组件标签的子节点。当组件标签有子节点时，props就会有该属性

- children属性与普通的props一样，值可以是任意值（文本，React元素，组件，甚至函数...)



```react
function Hello(props) {
	return (
		<div>
        	组件的子节点：{props.children}
        </div>
	)
}	
<Hello>我是子节点</Hello>
```



#### 校验（使用proptypes包）

- 对于组件来说，props是外来的，无法保证组件使用者传入什么格式的数据

- 如果传入的数据格式不对，可能对导致组件内部报错
- 关键问题：组件的使用者不知道明确的错误原因
- props检验：允许在创建组件时，就指定props的类型，格式等
- 作用：捕获使用组件时因为props导致的错误，给出明确的错误提示，增加组件的健壮性

```react
// 小明创建的组件 App
function App (props) {
	const arr = props.colors
	const lis = arr.map ((item，index) => <li key={index}>{item.name}</li>)
    return (
		<ul>{ lis}</ul>
    )
//小红使用组件App
<App colors={19}>
```



##### 使用步骤：

1.安装prop-types包

2.导入prop-types包

3.使用 <font color=red>组件名.propTypes={}</font>来给组件的props添加校验规则

4.校验规则通过PropTypes对象来指定



#### props的默认值

- 使用场景：例如分页组件，需要一个默认显示条数

- 在没有传入值时默认值生效



```react
function App(props){
    return (
    	<div>
        	此处展示props的默认值：{props.pageSize}
        </div>
    )
}

// 添加组件的默认值
App.defaultProps={
    pageSize:10
}

<App/>
```

