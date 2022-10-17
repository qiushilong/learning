{
  /**
   * Record: 用于快速定义对象类型
   */

  type Person = Record<"name" | "age", string | number>;

  const p: Person = {
    name: "zs" || 12,
    age: 12 || "sd",
  };

  // 实现原理
  type RECORD<K extends string | number | symbol, V> = {
    [P in K]: V;
  };
}
