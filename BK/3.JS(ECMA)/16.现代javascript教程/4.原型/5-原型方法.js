/*
  Object.create(proto,[descriptors]) --利用给定的proto作为[[Prototype]]和
  可选的属性描述来创建一个空对象
  Object.getPrototypeOf(obj) --返回对象的obj的[[Prototype]]
  Object.setPrototypeOf(obj,proto)  --将对象obj的[[Prototype]]设置为proto
*/

let animal = {
  eats: true
};
// 创建一个以 animal 为原型的新对象
let rabbit = Object.create(animal);
alert(rabbit.eats); // true
alert(Object.getPrototypeOf(rabbit) === animal); // true
Object.setPrototypeOf(rabbit, {}); // 将 rabbit 的原型修改为 {}