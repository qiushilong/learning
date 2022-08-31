var fs = require('fs');
var data = '菜鸟教程官网地址：www.runoob.com';

//创建一个可以写入的流,写入到output.txt
var writerStream = fs.createWriteStream('output.txt');

//设置编码
writerStream.write(data, 'utf-8');

//标记文件末尾
writerStream.end();

//处理流事件 -->finish,error
writerStream.on('finish', function () {
    console.log('写入完成');
});
writerStream.on('error', function () {
    console.log(err.stack);
});

console.log("程序执行完毕");