/**
 * keyof: 获取类，接口等的 key 的值类型
 */

type Keys = keyof { name: string; age: number };

let v1: Keys = "name";
let v2: Keys = "age";
let v3: Keys = "eat"; // 不能将类型“"eat"”分配给类型“"name" | "age"”。ts(2322)
