const express = require('express');
const home = require('./router/home');

const app = express();

// 为路由对象匹配请求路径
app.use('/home', home);

app.listen(3000, () => {
  console.log("run at http://localhost:3000/");
})