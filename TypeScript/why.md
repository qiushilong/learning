# 为什么使用 typescript
- 程序更容易理解
  - 明确输入输出参数类型
  - 明确变量类型
- 效率更高
  - 在不同代码块和定义中进行跳转
  - 代码自动补全
  - 丰富的接口提示
- 更少的错误
  - 编译期间能够发现大部分错误
  - 杜绝一些比较常见的错误
- 非常好的包容性
  - 完全兼容 javascript
  - 第三方库可以单独编写类型文件
  - 流行项目大都支持 typescript

缺点：
- 增加了一些学习成本
- 短期内增加了一些开发成本



```js
// js：结果是未预期的
function add(num1, num2) {
  return num1 + num2;
}
console.log(add('2', '3')); // '23'
console.log(add(undefined, 1)); // NaN
```

```typescript
// ts：
function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add('2', '3')); // ts 编译就会报错
console.log(add(undefined, 1)); // ts 编译就会报错

```

