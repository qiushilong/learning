const express = require('express');
const path = require('path');
const app = express();
const port = 3000

/*
  在express中使用模板引擎需要下载art-template 和 express-art-template
*/
//1.告诉app使用的模板引擎
app.engine('art', require('express-art-template'));
//2.设置模板存放的位置
app.set('views', path.join(__dirname, 'view'));
//3.告诉express框架模板的默认后缀是什么
app.set('view engine', 'art');

app.get('/', (req, res) => {
  //4.使用res.render渲染模板,第二个参数是为模板提供的数据
  res.render('index', {
    msg: 'nihao'
  })

});

app.listen(port, () => {
  console.log(`run at http://localhost:${port}`);
})