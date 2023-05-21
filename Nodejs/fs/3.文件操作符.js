const fs = require('fs');
const path = require('path')

const filePath = path.resolve(__dirname + '/motto.txt')

fs.open(filePath, 'r', (err, fd) => {
    if(err) {
        console.error(err)
    }
    // fd 为该文件在操作系统中的唯一标识
    console.log(fd)
})

// r 只读 不能创建新文件
// r+ 读写 不能创建新文件
// w+ 读写，定位在文件最前 文件不存在则自动创建
// a 写，定位在文件最后 文件不存在则自动创建
// a+ 读写，定位在文件最后 文件不存在则自动创建