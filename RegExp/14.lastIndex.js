let msg = "hello, world";
let reg = /\w/g;

// lastIndex 表示匹配到的位置
console.log(reg.lastIndex);
console.log(reg.exec(msg));

console.log(reg.lastIndex);
console.log(reg.exec(msg));

console.log(reg.lastIndex);
console.log(reg.exec(msg));
