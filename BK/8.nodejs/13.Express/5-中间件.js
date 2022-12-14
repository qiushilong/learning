/*
  中间件的定义:
    可用针对同一个请求设置多个中间件,对同一个请求进行多次处理
    默认情况下,请求从上到下依次匹配中间件,一旦匹配成功,终止匹配
  可以调用next方法将请求的控制权交给下一个中间件,直到遇到结束请求的中间件

  中间件的应用:
  1.路由保护,客户端在访问需要登录的页面时,可以先使用中间件判断用户登录状态,用户如果未登录,则拦截请求,直接
      响应,禁止用户进入需要登录的页面
  2.网站维护公告，在所有路由的最上面定义接收所有请求的中间件,直接为客户端做出响应,网站正在维护中
  3.自定义404界面
  */
const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  req.name = "张三";
  next();//当前中间件执行完后还要向下执行中间件
})

app.get('/', (req, res) => {
  res.send(req.name)
})

app.listen(3000, () => {
  console.log(`run at http://localhost:3000/`);
})