const fs = require('fs');
const path = require('path')

// linux 下路径要绝对路径
const filePath = path.resolve(__dirname + '/motto.txt')
console.log('filePath', filePath)

// 同步获取方法 fs.statSync

// 异步获取方法
fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error("获取失败", err)
        return;
    }
    // console.log(stats)
    console.log('isFile', stats.isFile())
    console.log('isDirectory', stats.isDirectory())
    console.log('isSymbolicLink', stats.isSymbolicLink()) // 是否是符号链接
    console.log('size', stats.size)
})
