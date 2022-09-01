## React路由

现代的前端应用大多都是SPA（单页应用程序），也就是只有一个HTML页面的应用程序。因为它的用户体验更好，对服务器压力更小，所以更受欢迎。为了有效的使用单个页面来管理多个页面的功能，前端路由应运而生。



SPA的底层原理：1.锚点（hash） window.onhashchange    2.h5（history） 等



- 前端路由功能：让用户从一个视图导航到另一个视图
- 前端路由是一套映射规则，在React中，是URL路径和组件的对应关系
- 使用React路由简单来说，就是配置路径和组件（配对）



#### 使用步骤

1.导入react-router-dom

2.使用Router组件包裹整个应用

3.使用link作为入口

4.使用Route指定出口



```react
import React, { Component } from 'react';

// 1.按需导入react-router-dom 里面的三个组件
// BrowerRouter as Router 为前面的组件起别名，方便切换BrowerRouter和HashRouter
// HashRouter使用的是锚点，BrowserRouter使用的是h5 history
// Route 定义路径和显示组件之间的关系
// Link 实现声明式跳转
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// 2.引入带显示的组件
import Home from './component/Home'
import News from './component/News'
import Profile from './component/Profile'

class App extends Component {
  render () {
    return (
      <Router>
        {/* 注册路由 */}
        <div>
          <h1>react路由</h1>
          {/* this.props.history.push(path,state) 编程式跳转，参数1：跳转的路径 参数2：携带的路由参数*/}
          { /* 以下为声明式路由 activeClassName可以为选中链接添加样式 */}
          <Link to="/home">首页</Link>
          <hr />
          <Link to="/news">新闻</Link>
          <hr />
          <Link to="/profile">个人中心</Link>
          <hr />
        </div>
        <Route path="/home" component={Home}>首页</Route>
        <Route path="/news" component={News}>新闻</Route>
        <Route path="/profile" component={Profile}>个人中心</Route>
      </Router>
    )
  }
}

export default App;

```

