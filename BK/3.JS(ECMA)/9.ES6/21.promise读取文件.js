
const fs = require('fs');

//普通方法
// fs.readFile('为学.md', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })

//promise
const p = new Promise(function (resolve, reject) {
    fs.readFile('为学.md', (err, data) => {
        //失败
        if (err) reject(err);
        //成功
        resolve(data);
    })
})

p.then(function (value) {
    console.log(value.toString());
}, function (reason) {
    console.log('读取失败');
})