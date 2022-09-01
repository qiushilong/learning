//默认导入和按需导入可以写一起
import m2, { s1, s2, say } from './2.Es6导出.js'

console.log(m2);
console.log(s1);
console.log(s2);
console.log(say);
//如果导入的模块没有导出,则导入的为空对象{}