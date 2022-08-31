/** 基本使用 */
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return this.greeting;
  }
}
let greeter = new Greeter("hello world");

/** 修饰符:
 *  修饰成员：private，protected，public，static
 *  修饰属性：readonly
 */
// 代码略

/** 继承 */
// 代码略

/** 存取器 */
class Employee {
  private _fullName: string;
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    this._fullName = newName;
  }
}
let employee = new Employee();
employee.fullName = "小明";
console.log(employee.fullName); // 小明

/** 抽象类 */
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("move~~~");
  }
}

/** 高级技巧 */
// 未看，略