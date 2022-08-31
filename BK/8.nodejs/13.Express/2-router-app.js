/*
路由基础:
路由是指确定应用程序如何响应客户端对特定端点的请求,
该特定端点是URI(或路径)和特定的HTTP请求方法.

每个路由可以具有一个或多个处理程序函数,
这个函数在匹配该路由时执行.
*/

const express = require('express');
const app = express();
const port = 8000

app.get('/', (req, res) => {
  res.send('index');
});

app.post('/me', (req, res) => {
  res.send('post me')
})

app.listen(port, () => {
  console.log(`run at http://localhost:${port}`);
})