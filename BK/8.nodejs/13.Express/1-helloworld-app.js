const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!');
  // express的send方法
  // 1.send方法内部会检测响应内容的类型
  // 2.send方法会自动设置http状态码
  // 3.send方法会帮我们自动设置响应的内容类型及编码
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})