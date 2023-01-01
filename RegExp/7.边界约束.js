// 以数字开头
console.log(/^\d/.test("a123")); // false
console.log(/^\d/.test("123b")); // true

// 以字母结尾
console.log(/[a-zA-Z]$/.test("a123")); // false
console.log(/[a-zA-Z]$/.test("123b")); // true

// 以数字开头，以字母结尾
console.log(/^[0-9].*[a-zA-Z]$/.test("1ab")); // true
console.log(/^[0-9].*[a-zA-Z]$/.test("a1b")); // false
