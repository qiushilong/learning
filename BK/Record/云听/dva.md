## Dva

#### 简介

dva 首先是一个基于[redux](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Freduxjs%2Fredux)和[redux-saga](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fredux-saga%2Fredux-saga)的数据流方案，然后为了简化开发体验，dva 还额外内置了[react-router](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FReactTraining%2Freact-router)和[fetch](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fgithub%2Ffetch)，所以也可以理解为一个轻量级的应用框架。



#### 核心概念

##### State和View

State是存储数据的地方，收到Action以后，会更新数据。

View就是React组件构成的UI层，从State取数据后，渲染成HTML代码。只要State有变化，View就会自动更新。



##### Action

Action是用来描述UI层事件的一个对象。

```js
{
    type:'click-submit-button',
    payload:this.form.data
}
```



##### connect方法

connect方法是一个函数，绑定State到View。

```js
import { connect } from 'dva';

function mapStateToProps(state){
    return {
        todos:state.todos
    };
}

connect(mapStateToProps)(App);
```

connect方法返回的也是一个React组件，通常称为容器组件。因为它是原始UI组件的容器，即在外面包了一层State。

connect方法传入的第一个参数是mapStateToProps函数，mapStateToProps函数会返回一个对象，用于建立State到Props的映射关系。



##### dispatch

dispatch是一个函数方法，用来将Action发送给State。

```js
dispatch({
    type:'click-submit-button',
    payload:this.form.data
})
```

dispatch 方法从哪里来？被 connect 的 Component 会自动在 props 中拥有 dispatch 方法。





#### 路由

dva中的路由，就是react-router，用法一致





