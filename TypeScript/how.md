# typescript 使用

## 基础类型

```typescript
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
let k: () => void = () => {}; // void：函数没有返回值
let l: () => never = () => {
  throw new Error("Error");
}; // never：永远不会到达的值（throw Error，无限循环...）

// 特殊些
let m: ReadonlyArray<number> = [1, 2, 3]; // 只读数组
```



## enum

```typescript
// 枚举成员默认从 0 开始赋值
enum Deriction {
  Up,
  Down,
  Left,
  Right,
}

let a: Deriction = Deriction.Up;
```



## Object

```typescript
// name 只读，age 可选
const person: { readonly name: string, age?: number, eat: () => void } = {
  name: "张三",
  age: 25,
  eat: () => {},
}
```



## function

```typescript
// 可选参数注意放后面
function add(x: number, y: string, z?: number) : string {
  return z? x + y + z : x + y;
}
```



## type assertion（断言）

```typescript
function getName(str){
  console.log(str.length as string) // 写法 1
  console.log(<string>str.length) // 写法 2
}
```



## generics（泛型）

在使用的使用指定类型

```typescript
// 函数泛型
function echo<T>(arg:T):T{
  return arg;
}

const a = echo<String>('c')
const b = echo<number>(1)

// 多个泛型
function swap<T, U>(tuple:[T,U]):[U, T]{
  return [tuple[1],tuple[0]]
}
const c = swap(['string', 123])

// 约束泛型
interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 类泛型
class Queue<T> {
  private data = [];
  push(item: T):T {
    return this.data.push(item);
  }
  pop():T {
    return this.data.shift();
  }
}

// 接口泛型
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 123, value: 'value'}
```

## type（别名）
类型别名
```typescript
type PlusType = (x: number, y: number) => number;
```

## interface

```typescript
// 接口定义对象
interface Person {
  name: string;
  age: number;
  eat?: Function; // 可选属性
  readonly id: number; // 只读属性
  [propName: string]: any; // 额外属性
}

// 接口定义函数（对于函数的类型检查来说，参数名不需要和接口中定义的一样）
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// 特殊
interface Arr {
  [index: number]: string; // 索引类型
  
  // readonly [index: number]: string; // zhi'du
}
```

