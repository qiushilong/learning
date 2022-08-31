const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('index');
});

//请求地址 http://localhost:3000/me/1

app.get('/me/:id', (req, res) => {
  //req.params.id可以获取到id
  res.send(req.params);
})

//传递多个参数 http://localhost:3000/you/1/hehe
app.get('/you/:id/:msg', (req, res) => {
  res.send(req.params);
})

app.listen(port, () => {
  console.log(`run at http://localhost:${port}`);
})