/*
  原型继承形成了原型链,
  原型链可用很长
*/

let animal = {
  eats: true,
  walk () {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk 是通过原型链获得的
longEar.walk(); // Animal walk
alert(longEar.jumps); // true（从 rabbit）

/*
注意点:
  1. 引用不能形成闭环。如果我们试图在一个闭环中分配 __proto__ ，JavaScript 会抛出错误。
  2. __proto__ 的值可以是对象，也可以是 null 。而其他的类型都会被忽略。
  3. 一个对象只能有一个 [[Prototype]]
  4. __proto__ 只是[[Prototype]] 的 getter/setter
  5. 原型链的查找是由下至上的,按照查找到的第一个为准
  6. 写/删除操作直接在对象上进行，它们不使用原型（假设它是数据属性，不是 setter）
 */