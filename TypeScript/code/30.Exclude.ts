{
  /**
   * Exclude：
   *   Exclude<T, U>
   *   
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

  const p: Exclude<A, B> = { name: "zs", age: 12 };

  // 实现机制
  type EXCLUDE<T, U> = T extends U ? never : T;
}
