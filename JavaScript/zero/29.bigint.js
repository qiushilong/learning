/**
 * BigInt
 * 可以表示任意数值
 * BigInt 类型只能和 BigInt 类型进行计算（除了字符串连接）
 * BigInt 也不能使用 Math 的方法
 *
 * 创建方式：
 *   1.
 *   2.
 */

let num1 = 1324232348340284930243928n; // bigint

let num2 = BigInt(1324232348340284930243928);

console.log(num1, num2);

console.log(num1 + num2);
// console.log(2 * num2); // Cannot mix BigInt and other types, use explicit conversions

console.log(15n < 20);
console.log(15n === 15); // false 类型不一样

console.log(num1 + " very big");

console.log(10n / 3n); // 3n
console.log(10 / 3); // 3.33333
