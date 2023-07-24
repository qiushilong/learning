// 方法装饰器声明在一个方法声明之前（紧靠着方法声明）。它会被应用到方法的属性描述符上，可以用来监视，修改，或者替换方法定义。
// 方法修饰符不能用在声明文件（.d.ts），重载或者任何外部上下文（比如 declare）

/**
 * 方法修饰符表达式会在运行时当作函数被调用，传入下列三个参数：
 * 1. 对应静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 * 2. 成员的名字。
 * 3. 成员的属性描述符。
 */
{
  function enumerable(value: boolean) {
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDecorator
    ) {
      descriptor.enumerable = value;
    };
  }

  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }

    @enumerable(false)
    greet() {
      return "Hello, " + this.greeting;
    }
  }
}
