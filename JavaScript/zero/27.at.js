// ES 2022 新增了 at 方法，可用于数组和字符串取值
const arr = [1, 2, 3, 4, 5];

// 获取 0
console.log(arr[0]);
console.log(arr.at(0));

// 获取最后一个元素
console.log(arr[arr.length - 1]);
console.log(arr.at(-1)); // -1 表示从后面数第一个
