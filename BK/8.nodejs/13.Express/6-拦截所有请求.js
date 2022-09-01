const express = require('express');

const app = express();

//接受所有请求的中间件
app.use((req, res, next) => {
  console.log('请求了app.use');
  next();
})

//只要请求了/,不管什么请求方式都可以执行
app.use('/', (req, res, next) => {
  console.log('请求了app.use 的 /');
  next();
})

app.get('/', (req, res) => {
  res.send('index');
})

app.listen(3000, () => {
  console.log("run at http://localhost:3000/");
})