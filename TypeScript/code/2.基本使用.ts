function add(num1: number, num2: number) {
  return num1 + num2;
}

add(1, "2"); // 这里编辑器直接提示报错

// 使用 tsc 命令跑时
// 2.基本使用.ts:5:8 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// 但还是生成了 2.基本使用.js