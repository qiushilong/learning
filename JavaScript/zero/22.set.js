/**
 * set:
 *   1. 元素都唯一的
 *   2. 元素之间没有关系
 *   3. 查找时间复杂度为 O(1)
 *   4. 值可以是任意类型
 *
 * 操作：
 *    1. 获取长度 set.size
 *    2. has()
 *    3. add()
 *    4. delete()
 *    5. clear()
 *    6. keys()
 *    7. entries()
 *    8. values()
 *
 * 数组去重：
 *    Array.form(new Set(arr))
 */

const set = new Set();
const set2 = new Set(["a", 2, 3, 4]);

console.log(set, set2);
console.log(set2.keys());
console.log(set2.entries());
console.log(set2.values());

set2.forEach((item) => {
  console.log(item);
});
