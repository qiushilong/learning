/**
 * map:
 *   1. key 值不重复
 *   2. 查找时间复杂度为 O(1)
 *   3. 任何类型都可以作为 key
 *   4. 如果 key 是引用类型，需要引用相同才是同一个 key
 *
 * 操作：
 *   1. 查看长度 map.size
 *   2. set()  没有则新增，有则修改，可以链式操作
 *   3. get()
 *   4. has()
 *   5. delete()
 *   6. clear();
 *   7. keys()
 *   8. entries()
 *
 * 对象转 map
 *   new Map(Object.entries(obj))
 * map 转数组
 *   [...map]
 */

const map = new Map();
const map2 = new Map([
  [1, "a"],
  [true, "b"],
  [undefined, "c"],
]);

map.set("name", "john");
map.set("age", 12).set("eat", () => {
  console.log("eat");
});
console.log(map, map2);

console.log(new Map(Object.entries({ name: "john", age: 12 })));
