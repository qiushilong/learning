/*
    合并缓冲区
    语法:
    Buffer.concat(list[,totalLength])
    参数:
    list-用于合并的Buffer对象数组列表
    totalLength-指定合并后Buffer对象的总长度
    返回值:
    返回一个多个成员合并的新 Buffer 对象
*/
var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
//输出:
//buffer3 内容: 菜鸟教程www.runoob.com

/*
    缓冲区比较
    语法:
    buf.compare(otherBuffer)
    参数:
    otherBuffer-与buf比较的另一个对象
    返回值:
    <0:在之前
    =0:缓冲区相同
    >0:在之后
*/
var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if (result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
} else if (result == 0) {
    console.log(buffer1 + " 与 " + buffer2 + "相同");
} else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}
//输出:
//ABC在ABCD之前

/*
    拷贝缓冲区
    语法:
    buf.copy(targetBuffer[,targetStart[,sourceStart[,sourceEnd]]])
    参数:
    targetBuffer-要拷贝的Buffer对象
    targetStart-数字,默认0
    sourceStart-数字,默认0
    sourceEnd-数字,默认buf.length
    无返回值
*/
var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1, 2);

console.log(buf1.toString());
//输出:
//abRUNOOBijkl

/*
    缓冲区剪裁
    语法:
    buf.slice([start[,end]])
    参数:
    start:开始位置,默认0
    end:结束位置,默认buf.length
    返回值:
    返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切
*/
var buffer1 = Buffer.from('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0, 2);
console.log("buffer2 content: " + buffer2.toString());
//输出:
//buffer2 content: ru

/*
    获取缓冲区长度:
    buf.length
*/