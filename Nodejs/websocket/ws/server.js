const WebSocket = require('ws');

// 创建WebSocket服务器实例
const wss = new WebSocket.Server({ port: 8080 });

// 监听连接事件
wss.on('connection', function connection(ws) {
    // 当有新的WebSocket连接建立时，触发该事件

    // 监听消息事件
    ws.on('message', function incoming(message) {
        // 当接收到客户端发送的消息时，触发该事件
        console.log('received: %s', message);

        // 发送消息给客户端
        ws.send('Server received: ' + message);
    });

    // 监听关闭事件
    ws.on('close', function close() {
        // 当连接关闭时，触发该事件
        console.log('client disconnected');
    });

    // 发送欢迎消息给客户端
    ws.send('Welcome to the WebSocket server!');

    for (let i = 0; i < 100; i++) {
        ws.send(i % 2 === 0 ? '521' : '520')
    }

});

// 在服务器启动时输出日志
wss.on('listening', function () {
    console.log('WebSocket server started and listening on port 8080');
});