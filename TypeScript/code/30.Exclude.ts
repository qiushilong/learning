{
  /**
   * Exclude：
   *   Exclude<T, U>
   *   
   * Exclude<T, U>：这个工具会从类型 T 中排除（exclude）可以复制给 U 的那些类型，也就是在 T 中保留那些不能
   * 赋值给 U 的类型。换句话说，Exclude<T, U> 会创建一个新的类型，这个类型只包含那些在 T 中但不在 U 中类型；
   * 
   * 例如：Exclude<"a"|"b"|"c", "a"|"b"> 的结果是 "c"，因为 "c" 不在 "a"|"b" 中。
   * 
   * 
   * 实现原理：
   * type EXCLUDE<T, U> = T extends U ? never : T; 
   * 解释：
   * extends 表示能够赋值给
   * 例如 "a"|"b"|"c" 中的 "a" 和 "b" 都能赋值给 "a"|"b"，所以是 never；而 "c" 则返回自身
   * 
   * 例如 A 是 B 的实现，所以 Exclude<A, B> 返回 never
   */

  type S = string;
  type SN = string | number;

  const r: Exclude<SN, S> = 100;
  const r2: Exclude<SN, S> = "100"; // 不能将类型“string”分配给类型“number”。ts(2322)

  type A = {
    name: string;
    age: number;
  };

  type B = {
    name: string;
  };

  // B 是 A 的子类型。因为 B 的所有属性都存在于 A 中，所以 B 是 A 的子类型。

  const p: Exclude<A, B> = { name: "zs", age: 12 };

  // 实现机制
  type EXCLUDE<T, U> = T extends U ? never : T;
}
