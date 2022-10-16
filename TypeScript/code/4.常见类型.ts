/**
 * number
 * boolean
 * string
 * null
 * undefined
 * any
 * undefined
 * number[]
 * Array<number>
 * [number, string]
 * (number | string)[]
 * Function
 * Object
 * Date
 * RegExp
 * ...
 */
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
let n: { name: string; age: number } = { name: "zs", age: 12 };
let o: { name: string; age?: number } = { name: "ls" };

let p: Function;
let q: Object;

let r = (...rest: number[]) => {
  return rest.reduce((pre, cur) => pre + cur, 0);
};

// 值类型
let sex: "nan" | "nv" = "nan";
let sex2: 1 | 0 = 1;

// 只读数组
let s: ReadonlyArray<number> = [1, 2, 3];

/**
 * 注意：
 *   1. 少用 any，未知类型使用 unkown
 */
