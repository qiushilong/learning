{
  /**
   * Extract 和 Exclude 相反
   *   用于获取相交的类型
   */

  type SNB = string | number | boolean;
  type SN = string | number;
  const r: Extract<SNB, SN> = 12;

  // 实现原理
  type EXTRSCT<T, U> = T extends U ? T : never;
}
