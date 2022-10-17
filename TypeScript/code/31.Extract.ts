{
  /**
   * Extract 和 Exclude 相反
   *   用于获取相交的类型
   */

  type SNB = string | number | boolean;
  type SN = string | number;
  const r1: Extract<SNB, SN> = 12;
  const r2: Extract<SNB, SN> = "12";
  const r3: Extract<SNB, SN> = true; // 不能将类型“boolean”分配给类型“string | number”。ts(2322)

  // 实现原理
  type EXTRSCT<T, U> = T extends U ? T : never;
}
