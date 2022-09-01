/*
  需求:
  我们有一个 user 对象及其属性和方法，并希望将 admin 和 guest 作为基于 user 稍
  加修改的变体。我们想重用 user 中的内容，而不是复制/重新实现它的方法，而只是在其之上构
  建一个新的对象。

  原型继承可以解决该问题.
*/

/*
  [[Prototype]]:
  JavaScript中,对象有一个特殊的隐藏属性[[Prototype]]称之为"原型"
  [[Prototype]]它要么为null,要么是对另一个对象的引用,而其他的类型都会被忽略。
  默认情况下对象的[[Prototype]]是Object Prototype
*/

/*
  原型继承:
  当我们从 object 中读取一个缺失的属性时，JavaScript 会自动从原型中获取该属性。在编程
  中，这种行为被称为“原型继承”
*/

/*
  属性 [[Prototype]] 是内部的而且是隐藏的
  操作[[Prototype]]属性的方法:
  1.__proto__
  2.Object.getPrototypeOf(obj)/Object.setPrototypeOf(obj,prototype)
*/

let animal = {
  eats: true,
  eatFn () {
    console.log('吃东西');
  }
};
let rabbit = {
  jumps: true
};
rabbit.__proto__ = animal;

console.log(rabbit.eats);  // 结果:true  原因:在rabbit中找不到eats属性,会从原型中获取数据,获取不到则为undefined
rabbit.eatFn();

/*
  在这里,我们可以说"animal是rabbit的原型",也可说"rabbit的原型是从animal继承而来"
  animal中的属性和方法,它们自动的变为rabbit中可用,这种行为称为继承
 */