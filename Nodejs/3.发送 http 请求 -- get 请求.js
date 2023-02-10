const https = require('https');

const options = {
    hostname: 'nodejs.cn',
    port: 443,
    path: '/todos',
    method: 'GET'
}

const req = https.request(options, res => {
    console.log(`状态码：${res.statusCode}`)

    res.on('data', data => {
        console.log(data)
        // process.stdout.write(data)
    })
})

req.on('error', error => console.log(error))

req.end();