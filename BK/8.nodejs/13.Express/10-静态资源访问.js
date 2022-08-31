const express = require('express');
const path = require('path');
const app = express();
const port = 3000

//实现静态资源访问功能
//第一个参数,虚拟路径可写可不写
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('index');
});

app.listen(port, () => {
  console.log(`run at http://localhost:${port}`);
})