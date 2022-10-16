let a1: any = "a";
let s1: string = a1;

let a2: unknown = "a";
let s2: string = a2; // 不能将类型“unknown”分配给类型“string”。ts(2322)

/**
 * any: 表示任何类型，不进行 ts 校验。（不写类型默认是 any）
 * unknown：表示未知类型，有 ts 校验
 */

// 使用 as 类型断言
let s3: string = a2 as string;
// 使用 <type> 类型断言
let s4: string = <string>a2;

// 非空断言
