const https = require('https');

const data = JSON.stringify({
    todo: '做点事情'
})

const options = {
    hostname: 'nodejs.cn',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = https.request(options, res => {
    console.log(`状态码: ${res.statusCode}`)
  
    res.on('data', d => {
      process.stdout.write(d)
    })
})
  
req.on('error', error => {
console.error(error)
})

req.write(data)
req.end()