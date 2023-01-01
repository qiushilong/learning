/**
 * i 不区分大小写
 * g 全局匹配
 * m 逐行匹配
 * u 匹配宽字节
 * y 不忽略不匹配的内容
 */

let msg = "hello wOrld";

msg = msg.replace(/o/gi, "@");
console.log(msg);
