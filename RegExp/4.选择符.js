const msg = "hello world";

// 是否含有 h 或 v
console.log(/h|v/.test(msg)); // true

const tel = "010-9999999";
console.log(/010|020\-\d{7,8}/.test(tel)); // true
// 但是
console.log(/010|020\-\d{7,8}/.test("010")); // true
// 所以
console.log(/(010|020)\-\d{7,8}/.test("010")); // false
// 但是
console.log(/(010|020)\-\d{7,8}/.test("a010-9999999b")); // true
// 所以
console.log(/^(010|020)\-\d{7,8}$/.test("a010-9999999b")); // false
