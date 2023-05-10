{
  /**
   * Extract 和 Exclude 相反
   *   用于获取相交的类型
   * 
   * Extract<T, U> 这个工具会从类 T 中提取(extract) 可以赋值给 U 的那些类型，也就是在 T 和 U 中都存在的类型。
   */

  type SNB = string | number | boolean;
  type SN = string | number;
  const r1: Extract<SNB, SN> = 12;
  const r2: Extract<SNB, SN> = "12";
  const r3: Extract<SNB, SN> = true; // 不能将类型“boolean”分配给类型“string | number”。ts(2322)

  // 实现原理
  type EXTRSCT<T, U> = T extends U ? T : never;
}
