/**
 * Object.seal() 静态方法密封一个对象。密封一个对象会阻止其扩展并且使得现有属性不可配置。
 * 密封对象有一组固有的属性：不能添加新的属性、不能删除现有属性或更改其可枚举性和可配置性、不能重新分配原型。
 * 只要属性的值是可写的，它们仍然可以更改。
 */

const obj1 = {
    a : 1,
    b: 'nh'
}

Object.seal(obj1);

obj1.a = 2;
obj1.c = []; // 无法新增
delete obj1.a; // 无法删除
// obj1.__proto__ = Array.prototype; // 无法修改原型

console.log(obj1)
