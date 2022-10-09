/**
 * ES6+
 *
 * 1. let const
 * 2. 对象（数组）解构赋值
 * 3. 扩展运算符（spread） ...
 * 4. reset
 * 5. for of
 * 6. 对象增强 函数增强
 * 7. 可选链 ?.
 * 8. Set WeakSet Map WeakSet
 * 9. fetch
 * 10. websocket
 * 11. async
 * 12. await
 * 13. promise
 * 14. generation
 * 15. proxy
 * 16. 数组操作 forEach map filter reduce 
 *        find findIndex some every 
 *        flat(n) 展开数组嵌套，n表示展开层数 
 *        flatMap
 * 17. bigInt
 * 空值合并运算符 ??
 */

// 数组解构赋值
const [x, , , y, [, z]] = [1, 2, 3, 4, ["a", "b"]];
console.log(x, y, z);

// 对象解构赋值
const {
  name: na, // 别名
  age,
  hobby = "eat", // 默认值
  children: { cname, cage, hobby: chobby, children = null },
} = {
  name: "john",
  age: 23,
  children: {
    cname: "mike",
    cage: 3,
    hobby: "fun",
  },
};
console.log(na, age, hobby, cname, cage, chobby, children);

// reset 使用
const [a, b, ...reset] = [1, 2, 3, 4, 5];
console.log(a, b, reset);
const { apple, ...otherFruits } = {
  apple: "apple",
  banana: "banana",
  orange: "orange",
};
console.log(apple, otherFruits);
