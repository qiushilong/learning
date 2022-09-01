var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err)
        return console.error(err);
    console.log(data.toString());
});
console.log("程序执行结束!");

//输出结果顺序不同,为异步程序