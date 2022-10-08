/**
 * 创建 n 个为 1 的数组
 */

// 1. fill()
const x = new Array(7);
x.fill(1);
console.log("X:", x);

// 2. Array.form()
const y = Array.from({ length: 7 }, () => 1);
console.log("Y:", y);

