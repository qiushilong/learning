const app = require('express')();
const server = require('http').createServer(app);

const { Server } = require('socket.io')
const io = new Server(server);

app.get('/', (req, res) => {
    console.log(__dirname + '/index.html')
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', socket => {
    console.log('有位美女进入了聊天室');

    socket.on('chat message', msg => {
        console.log('msg', msg)

        io.emit('chat message', msg)
    })

    socket.on('disconnect', () => {
        console.log('美女离开了')
    })
})

server.listen(3000, () => '服务器开启')