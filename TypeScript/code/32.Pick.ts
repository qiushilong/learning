{
  /**
   * Pick: 用于挑选属性
   */

  type Person = {
    name: string;
    age: number;
    eat(): void;
  };

  const p: Pick<Person, "name" | "age"> = {
    name: "zs",
    age: 20,
    eat() {}, // “eat”不在类型“Pick<Person, "name" | "age">”中。ts(2322)
  };

  // 实现原理
  type PICK<T, U extends keyof T> = {
    [P in U]: T[P];
  };
}
