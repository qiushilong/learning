// 1. alloc
let buf = Buffer.alloc(10);
console.log(buf);

// 2. allocUnsafe 创建的可能包括旧的内存空间（创建比 alloc 快，不需要归零）
let buf_2 = Buffer.allocUnsafe(10);
console.log(buf_2);

// 3. from
let buf_3 = Buffer.from('hello');
console.log(buf_3); // <Buffer 68 65 6c 6c 6f>
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buf_4); // <Buffer 69 6c 6f 76 65 79 6f 75>