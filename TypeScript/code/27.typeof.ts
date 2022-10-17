{
  /**
   * typeof 用来获取变量的类型
   */
  let name: string = "zs";
  let name2: typeof name = "ls";
  let name3: typeof name = 12; // 不能将类型“number”分配给类型“string”。ts(2322)

  const per = {
    name: "zs",
    age: 18,
  };

  const per2: typeof per = {
    name: "ls",
    age: 20,
    // “eat”不在类型“{ name: string; age: number; }”中。ts(2322)
    eat() {
      console.log("eat");
    },
  };

  // keyof 结合 typeof 获取对象属性
  function getAttribute(obj: object, key: string) {
    return obj[key as keyof typeof obj];
  }
}
