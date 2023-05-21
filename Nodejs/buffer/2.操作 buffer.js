// 获取对应位置的值
let buf = Buffer.from('hello');
console.log(buf, buf[0], buf[0].toString(2))

// 溢出
let buf_2 = Buffer.from('hello');
buf_2[0] = 361; // 溢出
buf_2[1] = 256; // 未溢出
console.log(buf_2[0], buf_2[1])