/** 布尔值 */
let isDone: boolean = false;

/** 数值 */
let num: number = 6; // 十进制
let hexNum: number = 0xf00d; // 十六进制
let binaryNum: number = 0b1010; // 二进制
let ocatalNum: number = 0o744; // 八进制

/** 字符串 */
let str: string = "abc";

/** 数组 */
let list2: number[] = [1, 2, 3]; // 写法1，推荐
let list: Array<number> = [1, 2, 3]; // 写法2

/** 元组(Tuple)：不同元素类型的数组 */
let x: [string, number] = ["hello", 1024];

/** 枚举 */
enum Color {
  Red,
  Green,
  Blue,
} // Red 0,Green 1,Blue 2
enum Color2 {
  Red = 1,
  Green,
  Blue,
} // Red 1,Green 2,Blue 3
enum Color3 {
  Red = 1,
  Green = 2,
  Blue = 5,
} // Red 1,Green 2,Blue 5
let c: Color = Color.Green;
console.log(Color[1]); // "Green" 因为Color.Green的值为1

/** any：任意类型，相当于去除指定值的类型检查 */
let notSure: any = 5;
notSure = "isStr";

/** void：函数无返回值时，返回类型为void */
const fn = (): void => {};

/** null和undefined */
let n: null = null;
let u: undefined = undefined;

/** never：表示永远不存在的值 */
const error = (): never => {
  throw new Error("error");
};
const infiniteLoop = (): never => {
  while (true) {}
};

/** object：对象值 */
let obj: object = null;

/** 类型断言：告诉ts某个值按照指定的类型解析 */
let _str: any = "str";
let len: number = (<string>_str).length; // 写法1
let len2: number = (_str as string).length; // 写法2

/** 只读数组 */
let arr:ReadonlyArray<number> =[1,2,3];
(<number[]>arr)[1]=3; // 通过断言可以重写类型
