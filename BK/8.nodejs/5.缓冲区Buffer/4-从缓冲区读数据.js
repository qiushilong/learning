/*

    读取Node缓冲区数据语法:
    buf.toString([encoding[,start[,end]]])
    参数:
    encoding-使用的编码,默认为utf-8
    start-指定开始读取的索引位置,默认为0
    end-结束位置,默认为缓冲区的末尾
    返回值:
    解码缓冲区数据并使用指定的编码返回字符串

*/

buf = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf-8', 0, 5));
// 报错
// console.log(buf.toString('undefined', 0, 5));