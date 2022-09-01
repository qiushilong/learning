const express = require('express');
const app = express();
const port = 8000;

//用于解析json的post请求
app.use(express.json())
//用于解析x-www-form-urlencoded的post请求
app.use(express.urlencoded())

app.get('/', (req, res) => {
  console.log(req.url);//请求地址
  console.log(req.method);//请求方法
  console.log(req.headers);//请求头
  console.log(req.query);//get请求参数
  res.send('request相关API: https://www.expressjs.com.cn/4x/api.html#req')
})

app.post('/', (req, res) => {
  console.log(req.body);//get请求参数
  res.send('post');
})

app.listen(port, () => {
  console.log(`run at http://localhost:8000/`);
})