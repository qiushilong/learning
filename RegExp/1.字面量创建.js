let msg = "hello world";

// test 检测字符中是否有符合正则的内容
console.log(/h/.test(msg)); // true
console.log(/a/.test(msg)); // false

// 变量形式
const b = "e";
// 检测的是 b 是否存在
console.log(/b/.test(msg)); // false
// 检测的是 e 是否存在
console.log(eval(`/${b}/`).test(msg)); // true
