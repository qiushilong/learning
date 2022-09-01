## state

- 状态（state）即数据，是组件内部的私有数据，只能在组件内部使用
- state的值是对象，表示一个组件中可以有多个数据



#### 获取数据

this.state.数据名称



#### 修改数据

- <font color=red>不能直接修改state中的数据</font>
- 使用setState()作用：1.<font color=red>修改state</font> 2.<font color=red>更新UI</font>



##### 不抽离方法

```react
render() {
    return (
        <div>
            {/* 使用状态的数据 */}
            <h1>{'计数器'+this.state.count}</h1>
            {/* 修改state数据 */}
            <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>+1</button>
        </div>
    )
}
```

##### 抽离方法

###### 1.使用箭头函数

```react
onIncrement(){
    this.setState({
        count:this.state.count+1
    })
}

render() {
    return (
        <div>
            {/* 使用状态的数据 */}
            <h1>{'计数器'+this.state.count}</h1>
            {/* 修改state数据 */}
            <button onClick={()=>this.onIncrement()}>+1</button>
        </div>
    )
}
```

###### 2.使用bind绑定this

```react
constructor(){
    super()
    // 使用bind来绑定this
    this.onIncrement=this.onIncrement.bind(this)
}

onIncrement(){
    this.setState({
        count:this.state.count+1
    })
}

render() {
    return (
        <div>
            {/* 使用状态的数据 */}
            <h1>{'计数器'+this.state.count}</h1>
            {/* 修改state数据 */}
            <button onClick={this.onIncrement}>+1</button>
        </div>
    )
}
```

3.class的实例方法(<font color=red>推荐</font>)

- 利用箭头函数形式的class实例方法

```react
onIncrement= () =>{
    this.setState({
        count:this.state.count+1
    })
}

render() {
    return (
        <div>
            {/* 使用状态的数据 */}
            <h1>{'计数器'+this.state.count}</h1>
            {/* 修改state数据 */}
            <button onClick={this.onIncrement}>+1</button>
        </div>
    )
}
```

