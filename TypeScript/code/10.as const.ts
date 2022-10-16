// as const 可以用 <const> 替代

// as const: 表示值不应该再修改，会把推断改为值类型
let ac = "ac" as const; // ac 的类型从 string 变为 "ac" 值类型

ac = "ca"; // 不能将类型“"ca"”分配给类型“"ac"”。ts(2322)

// 包括直接使用 const 定义的内容，会自动推断为值类型
const cc = "cc";

const arrAs = [1, 2, "3"] as const; // 将 (number|string)[] 改为了元组 readonly [1, 2, "3"]

/*
  将 
  {
      name: string;
      age: number;
  } 
  改为了 
  {
    readonly name: "zs";
    readonly age: 12;
  }
*/
const objAs = {
  name: "zs",
  age: 12,
} as const;
