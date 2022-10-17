# TypeScript

## what？

TypeScript是微软开发的一个开源的编程语言，通过在JavaScript的基础上添加静态类型定义构建而成。



## why？

**优点：**

- 程序更加容易理解
  - 明确的变量类型
  - 明确的输入输出类型
- 丰富的接口提示
- 更少的错误
  - 编译期间能够发现大部分的错误
  - 杜绝一些比较常见的错误
- 包容性
  - 完全兼容 javascript
  - 第三方库可以单独编写类型文件
  - 流行项目大都支持 typescript

**缺点：**

- 增加了一些学习成本
- 短期内增加了一些开发成本



## how to use?

### 类型推断

```typescript
// 未自动声明的，ts 会自动进行推断

let str = "str1"; // 为 str 赋值时，str 被推断为 string 类型
str = "str2";
str = 100; // 不能将类型“number”分配给类型“string”。ts(2322)

let num; // 自动推断 -- any

function sum(a: number, b: number) {
  return a + b; // 自动推断 -- 返回值为 number
}

let arr = [1]; // 自动推断 -- number[]
arr.push("s"); // 类型“string”的参数不能赋给类型“number”的参数。ts(2345)

let arr2 = [1, "s"]; // 自动推断 -- (string | number)[]

// 如果不知道怎么写的，可以写一个列子，看编辑器的类型推断
// 直接鼠标 hover obj
let obj = {
  code: 0,
  message: "0",
  ttl: 1,
};

// 得到类型
interface objInterface {
  code: number;
  message: string;
  ttl: number;
}
```



### 常见类型

```ts
let a: number = 1;
let b: boolean = true;
let c: string = "c";
let d: null = null;
let e: undefined = undefined;
let f: any; // 任意类型，相当于不进行 typescript 检查
let g: unknown; // 未知类型
let h: number[] = [1, 2, 3]; // 数组：写法 1
let i: Array<number> = [1, 2, 3]; // 数组：写法 2
let j: [number, string] = [1, "a"]; // 元组（Tuple）：元组类型允许一个已知元素数量和类型的数组，各项可以不同类型
let k: (number | string)[] = [1, "a", 2, "b"]; // 联合类型数组
let l: () => void = () => {}; // void：函数没有返回值
let m: () => never = () => {
  throw new Error("Error");
}; // never：永远不会到达的值（throw Error，无限循环...）
// 对象类型
let n: { name: string; age: number } = { name: "zs", age: 12 };
let o: { name: string; age?: number } = { name: "ls" };

// 内置对象类型（还有很多）
let p: Function;
let q: Object;

// 值类型
let sex: "nan" | "nv" = "nan";
let sex2: 1 | 0 = 1;

// rest 语法
let r = (...rest: number[]) => {
  return rest.reduce((pre, cur) => pre + cur, 0);
};
```



### 枚举

```typescript
enum Sex {
  Girl,
  Boy,
}

const girl: Sex = Sex.Girl;
const boy: Sex = Sex.Boy;
```



### 断言

#### 类型断言

```js
let a: unkown = "abcd";

// 使用 as 类型断言
let s1: string = a as string;
// 使用 <type> 类型断言
let s2: string = <string>a;
```

#### 非空断言

```typescript
// 取值 DOM 时，获取元素可能不存在，返回值可能为 null
// 明确 DOM 元素存在时，可以使用类型断言
const el: HTMLElement = document.querySelector("#app") as HTMLElement;

// 或者使用非空断言（末尾添加 !）
const el2: HTMLElement = document.querySelector("#app")!;
```



### type

```typescript
// type 可以为任意类型取别名
type userType = {
  name: string;
  age: number;
  sex?: number; // 可选属性
  readonly id: string; // 只读属性
};

function addUser(user: userType): void {
  console.log("addUser");
}
function updateUser(user: userType): void {
  console.log("updateUser");
}
```



### 联合类型

```typescript
let un: number | string;
un = 1;
un = "s";

let unArr: (number | string)[] = [];
// 或者 let unArr: Array<number | string>
unArr.push(1);
unArr.push("s");
```



### 其他属性 

```typescript
type accountType = {
  account: string;
  password: string;
  [propName: string]: any; // 剩余任何属性都能接受，且不报错
};
```



### 类

```typescript
class User {
  public name: string; // public：所有地方都可以访问
  age: number; // 默认 public 修饰
  protected money: number; // protected：只能在该类或者子类中访问
  private phoneMsg: string; // private：只能在该类中访问
  readonly id: string; // 只读属性
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  info(): string {
    return `${this.name} ${this.age}`;
  }
}

const user1 = new User("zs", 12); // 不按照类型提示会报错
```



### 单例模式

```typescript
class Axios {
  private static instance: Axios | null = null;
  private constructor() {}

  static getInstance(): Axios {
    if (Axios.instance === null) {
      Axios.instance = new Axios();
    }
    return Axios.instance;
  }
}
```



### 抽象类

```typescript
abstract class Animal {
  public abstract name: string;
  abstract move(): void;
}

class Dog extends Animal {
  public name: string;
  move() {}
}
```



### 接口

```typescript
interface Animal {
  name: string;
  move(): void;
}

class Dog implements Animal {
  name: string;
  move() {}
}
```



### 泛型

```typescript
// 方法泛型
function dump<T>(args: T): T {
  return args;
}

let du1 = dump<string>("du1");
let du2 = dump<boolean>(true);

// 类泛型
class Collection<T> {
  public data: T;
  getData(): T {
    return this.data;
  }
}

const col = new Collection<string>();

// 接口泛型
interface UserInterface<T> {
  data: T;
}

type UserType<T> = {
  data: T;
};
```



### 泛型 extends

```typescript
// 不是所有的类型都存在 length 属性
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
```



### as const

```typescript
// 将类型转化为值类型

let ac = "ac" as const; // ac 的类型从 string 变为 "ac" 值类型

const arrAs = [1, 2, "3"] as const; // 将 (number|string)[] 变为元组 readonly [1, 2, "3"]

const objAs = {
  name: "zs",
  age: 12,
} as const;
// { name: string; age: number; } 变为 { readonly name: "zs"; readonly age: 12; }

```



### keyof

```typescript
// 获取类，接口等的 key 的值类型
type Keys = keyof { name: string; age: number };

let v1: Keys = "name";
let v2: Keys = "age";
```



### typeof

```typescript
// 用来获取变量的类型
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
```



### in

```typescript
// 用于遍历接口或联合类型的属性
type USER = { name: string; age: number };

type MEMBER<T> = {
  [K in keyof T]: T[K];
};

const per: MEMBER<USER & { address: string }> = {
  name:'zs',
  age:12,
  address:'sz'
};

```



### extends

```typescript
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
```



### Exclude

```typescript
type S = string;
type SN = string | number;

const r: Exclude<SN, S> = 100;
const r2: Exclude<SN, S> = "100"; // 不能将类型“string”分配给类型“number”。ts(2322)

// 实现原理
type EXCLUDE<T, U> = T extends U ? never : T;
```



### Extract

```typescript
// Extract 和 Exclude 相反，用于获取相交的类型
type SNB = string | number | boolean;
type SN = string | number;
const r1: Extract<SNB, SN> = 12;
const r2: Extract<SNB, SN> = "12";
const r3: Extract<SNB, SN> = true; // 不能将类型“boolean”分配给类型“string | number”。ts(2322)

// 实现原理
type EXTRSCT<T, U> = T extends U ? T : never;
```



### Pick

```typescript
// 用于挑选属性
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
```



### Omit

```typescript
// Omit 和 Pick 相反，用来排除指定属性
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
```



### Partial

```typescript
// 用于将全部属性设置为可选的
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
```



### Record

```typescript
// 用于快速定义对象类型
type Person = Record<"name" | "age", string | number>;
const p: Person = {
  name: "zs" || 12,
  age: 12 || "sd",
};

// 实现原理
type RECORD<K extends string | number | symbol, V> = {
  [P in K]: V;
};
```

