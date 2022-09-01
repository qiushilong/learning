## Redux

#### 简介

- Redux是一个用于JavaScript 状态容器，提供可与预测化的状态管理。
- Redux可以让你构建一致化的应用，运行于不同的环境（客户端、服务器、原生应用)，并且易于测试
- Redux除了和React一起使用外，还支持其它界面库，如Angular，jQuery，而且它体小精悍(只有2kB)



#### 设计初衷

- 随着JavaScript单页面发开日趋复杂，JavaScript需要管理更多的state (状态)，这些state可能包括服务器响应、缓存数据、本地生成未持久化到服务器的数据，也包括UI状态等
- 管理不断变化的state非常麻烦，如果一个model的变化会引起另一个model变化，那么当view变化时，就可能引起对应 model以及另一个model的变化，依次可能会引起另一个view的变化。所以就会产生混乱。



![image-20211103165600566](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211103165600566.png)



#### 三大核心

##### 1.单一数据源

整个应用的state被存储在一颗object tree中，并且这个object tree只存在于唯一一个store中

##### 2.state是只读的

唯一改变state的方法就是触发action，action是一个用于描述与发生事件的普通对象

##### 3.使用纯函数来执行修改

为了描述action如何改变state tree ，你需要去编写reducer



#### 组成

- 应用中所有state都以一个对象树的形式存储在一个单一的store中
- 唯一改变state的方法是触发action（store.dispatch()）
- 为了描述action如何改变state树，你需要编写reducers



##### state ----- 状态

就是我们传递的数据，那么我们在用React开发项目的时候，大致可以把State分为三类

DomainDate:可以理解成为服务器端的数据，比如:获取用户的信息，商品的列表等等
UI State:决定当前UI决定展示的状态，比如:弹框的显示隐藏，受控组件等等
App State:App级别的状态，比如:当前是否请求loading，当前路由信息等可能被多个和组件去使用的到的状态



##### action ----- 动作

- Action是一个JS普通对象
- Action通过store.dispatch(action)来改变state
- Action必须要有一个type属性来表示要执行的动作
- 多数情况下，这个type会被定义成字符串常量
- 除了type字段之外，action的结构随意进行定义
- 而我们在项目中，更多的喜欢用action创建函数，因为更好维护
- 只是描述了有事情要发生,并没有描述如何去更新state

```js
// action创建函数
function addToDo(text){
    return{
        type:'ADD_TODO',
        text:'...'
    }
}

// 修改state
store.dispatch(action)
// 方式二
const boundAddToDo = (text) => store.dispatch(addToDo(text))
```





##### reducer

- reducer是一个纯函数

- 形式为(state,action)=>state。
- 它描述了action如何把state转化为下一个state。
- 当state发生变化时需要返回全新的对象，没发生变化返回它自己就行。
- 初始化时，previousState为undefined，action为@@init@@。

```js
function counter(state=0,action){
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}
```





##### store

Store就是把action 与reducer联系到一起的对象

###### 主要职责:

- 维持应用的state
- 提供getState()方法获取state
- 提供 dispatch0方法发送action
- 通过subscribe()来注册监听
- 通过subscribe()返回值来注销监听



```js
// redux API  1.createStore(reducers)  2.store.getState()  3.store.dispatch(action)
// 通过createStore(reducers)来创建store
let store = createStore(counter);

// 可以手动订阅，也可以事件绑定到视图层
store.subscribe(()=>{
    console.log(store.getState());
})

// 改变内部state的唯一方法是dispatch一个action
store.dispath({type:'INCREMENT'});
store.dispath({type:'DECREMENT'});
```





#### 常用API



##### createStore(reducer)

创建store



##### store.getState()

获取状态值



##### store.dispatch(action)

提交action，修改state



##### store.subscribe(func)

监听state变化，变化后执行func





#### 异步action

action值为对象时称之为同步action

action值为函数时称之为异步action



```js
// 异步action
const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      // 通知redux+data
      dispatch(createIncrementAction(data))
    }, time)
  }
}
```





执行异步action需要安装 redux-thunk



```js
// 引入createStore，专门用来创建redux中核心的store对象

import { createStore, applyMiddleware } from 'redux'

// 引入redux-thunk,用于支持异步action

import thunk from 'redux-thunk'

import countReducer from './count_reducer'

// store来自redux的createStore方法

// createStore(reducers)

const store = createStore(countReducer, applyMiddleware(thunk))

export default store
```

