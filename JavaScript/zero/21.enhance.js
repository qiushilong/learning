/**
 * 对象增强
 * 1. 属性可以不用赋值
 * 2. 函数可以直接写
 * 3. 动态属性
 *
 * 函数增强
 * 1. 默认值
 */

const oname = "john";
const age = "age";

const obj = {
  oname, // 1.
  eat() {}, // 2.
  // 之前
  eatBefore: function () {},
  [age]: 12, // 3.
};
