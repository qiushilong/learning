const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('mime');//安装mime模块引入


http.createServer((req, res) => {
  let url = req.url.slice(0, req.url.indexOf('?') == -1 ? req.url.length : req.url.indexOf('?'));
  let absolute_url = path.join(__dirname, 'static', 'public', url);

  let type = mime.getType(absolute_url);

  fs.readFile(absolute_url, (err, data) => {
    if (err) {
      res.writeHead(404, {
        'content-type': 'text/html;charset=utf-8'
      })
      res.end('404');
      return;
    }
    res.writeHead(200, {
      'content-type': type + ';charset=utf-8'
    })
    res.end(data);
  })


}).listen(3000, () => {
  console.log('sever run at http://localhost:3000');
});