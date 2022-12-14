// 原子表
const reg = /[123456]/g; // 匹配1-6中的一个
// 区间匹配
const reg2 = /[1-6]/; // 匹配1-6中的一个
// 排除匹配
const reg3 = /[^\d]/; // 匹配非数字
// 原子表字符不解析
const reg4 = /[.+()]/; // 里面的一些字符不需要转义

// 原子组
const reg5 = /(1|2|3|4|5|6)/; // 匹配 12 或者 34

console.log("123456".match(/[123456]/)); // [ '1', index: 0, input: '123456', groups: undefined ]
console.log("123456".match(/[123456]/g)); // [ '1', '2', '3', '4', '5', '6' ]
console.log("123456".match(/(1|2|3|4|5|6)/)); // [ '1', '2', '3', '4', '5', '6' ]
