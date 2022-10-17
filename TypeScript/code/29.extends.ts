{
  /**
   * extends:
   *   1. 类型继承
   *   2. 类型条件判断
   */

  // 接口继承
  type Person = { name: string };
  interface User extends Person {
    age: number;
  }

  const per: User = { name: "zs", age: 12 };

  // 泛型继承
  function getLength<T extends { length: number }>(o: T): number {
    return o.length;
  }

  // 类型条件判断
  type Animal = { name: string; age: number };

  type Dog = { name: string; age: number; water(): void };

  type Flag = Dog extends Animal ? true : false;

  const f: Flag = true;
  const f2: Flag = false; // 不能将类型“false”分配给类型“true”。ts(2322)

  // 联合类型
  type S = string;
  type SN = string | number;

  const r1: S extends SN ? true : false = true;
}
