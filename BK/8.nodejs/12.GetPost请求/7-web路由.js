const http = require('http');
const app = http.createServer();

const port = 3000;
/*
  req.headers   //获取请求报文
  req.url       //获取请求地址
  req.method    //获取请求方法

  响应码
  200 成功
  400 请求语法错误
  404 资源找不到
  500 服务器内部错误

  响应类型
  text/plain(纯文本)
  text/html
  text/css
  image/jpge
  application/javascript
  application/json

  res.writeHead(响应码,{'content-type':响应类型;charset=字符编码})  
  res.writeHead(200,{
    'content-type':'application/json;charset=utf-8'
  })
  

*/
app.on("request", (req, res) => {
  //实现路由(路由不仅判断路径,还判断请求方法)
  if (req.method == 'get') {
    if (req.url == '/index') {
      res.end('index');
    } else if (req.url == '/login') {
      res.end('login');
    }
  } else if (req.method == 'post') {

  }
})

app.listen(port);

console.log('服务器运行在 http://localhost:3000');