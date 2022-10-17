{
  /**
   * Partial: 用于将全部属性设置为可选的
   *
   */

  type Person = {
    name: string;
    age: number;
    eat(): void;
    sleep(): void;
  };

  const p: Partial<Person> = {
    sleep() {
      console.log("sleep");
    },
  };

  // 实现原理
  type PARTIAL<T> = {
    [P in keyof T]?: T[P];
  };
}
