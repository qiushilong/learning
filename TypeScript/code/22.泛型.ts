{
  // 方法泛型
  function dump<T>(args: T): T {
    return args;
  }

  let du1 = dump<string>("du1");
  let du2 = dump<boolean>(true);

  // 泛型 extends
  function getLength<T extends { length: number }>(arg: T): number {
    return arg.length; // 不使用继承：类型“T”上不存在属性“length”。ts(2339)
  }
}
