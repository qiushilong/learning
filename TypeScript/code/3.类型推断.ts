// 未自动声明的，ts 会自动进行推断

let hd = "houdunren"; // 为 hd 赋值时，hd 被推断为 string 类型

hd = "yahu";

hd = 100; // 不能将类型“number”分配给类型“string”。ts(2322)

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
