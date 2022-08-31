/*
创建目录
语法
以下为创建目录的语法格式：
fs.mkdir(path[, options], callback)
参数
参数使用说明如下：

path - 文件路径。

options 参数可以是：

recursive - 是否以递归的方式创建目录，默认为 false。
mode - 设置目录权限，默认为 0777。
callback - 回调函数，没有参数。

实例
接下来我们创建 file.js 文件，代码如下所示：
*/

var fs = require("fs");
// tmp 目录必须存在
console.log("创建目录 /tmp/test/");
fs.mkdir("/tmp/test/", function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
});