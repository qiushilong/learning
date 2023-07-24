// 类装饰器表达式会在运行时作为函数被调用，类的构造函数作为其唯一的值
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
// 当 @sealed 被执行的时候，它将密封此类的构造函数和原型
// Object.seal https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal

// 重载构造函数
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class Greeter2 {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log('new Greeter("world")', new Greeter2("world"));
