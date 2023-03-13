const http = require('http');

const server = http.createServer((req, res) => {
    let data = ''
    req.on('data', chunk => {
        console.log(`可用的数据块：${chunk}`)
        data += chunk
    })
    req.on('end', () => {
        // 数据结束
        console.log(JSON.parse(data))
    })
})

