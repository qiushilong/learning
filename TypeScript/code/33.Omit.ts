{
  /**
   * Omit 和 Pick 相反，用来排除指定属性
   */

  type Person = {
    name: string;
    age: number;
    eat(): void;
  };

  const p: Omit<Person, "eat"> = {
    name: "zs",
    age: 20,
    eat() {}, // “eat”不在类型“Omit<Person, "eat">”中。ts(2322)
  };

  // 实现原理
  type Omit<T, U> = Pick<T, Exclude<keyof T, U>>;
}
