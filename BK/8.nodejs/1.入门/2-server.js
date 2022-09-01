/*
    Node.js应用的组成部分
    1.引入required模块:可以使用require指令来载入Node.js模块
    2.创建服务器:服务器可以监听客户端的请求,类似其他HTTP服务器
    3.接收请求和响应请求:服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据

*/

//1.引入required模块
var http = require('http');

//2.创建服务器
http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain(纯文本)
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');

    // 使用 listen 方法绑定 8888 端口
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');