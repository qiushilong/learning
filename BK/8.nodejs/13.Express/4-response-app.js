const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.status(200);//设置响应码
  res.send('response相关API: https://www.expressjs.com.cn/4x/api.html#res')
})

app.listen(port, () => {
  console.log(`run at http://localhost:8000/`);
})