const arr = ["a", "b", "c", "d", "e"];
const obj = {
  name: "john",
  age: 12,
};

// for in (所有版本)
for (const item in arr) {
  console.log(item); // 1 2 3 4 5
}

// for of (ES6)
// item 总是 each iteration

for (const item of arr) {
  console.log(item); // a b c d e
}

// 想要得到 index
for (const item of arr.entries()) {
  console.log(item);
}

// 想要得到 index
for (const [index, item] of arr.entries()) {
  console.log(index, item);
}

// 遍历对象
for (const item of Object.keys(obj)) {
  console.log(item, obj[item]);
}

// 遍历对象
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
