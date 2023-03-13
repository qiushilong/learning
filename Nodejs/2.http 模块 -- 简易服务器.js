const http = require('http')
const { hostname } = require('os')
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('你好世界')
})

server.listen(port, () => {
    console.log(`服务器运行在 http://${hostname}:${port}`)
})