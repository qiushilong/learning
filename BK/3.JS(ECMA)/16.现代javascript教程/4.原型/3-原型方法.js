/*
  JavaScript中所有函数都有prototype属性,在使用 new 这个函数时,会为新对象设置[[Prototype]]
  设置规则:
  函数的prototype不是对象,设置新对象的[[Prototype]]为Object[[Prototype]]
  是对象,则设置新对象的[[Prototype]]为该对象

  默认的 "prototype" 是一个只有属性 constructor 的对象，属性 constructor 指向函数自身
  constructor可用完全替代指向的函数
*/

let animal = {
  eats: true
};

function Rabbit (name) {
  this.name = name;
}

Rabbit.prototype = animal; // (*) 
let rabbit = new Rabbit("White Rabbit"); // 相当于设置了rabbit.__proto__ == animal
alert(rabbit.eats); // true

/*
设置 Rabbit.prototype = animal 的字面意思是：“当创建了一个 new Rabbit 时，把它
的 [[Prototype]] 赋值为 animal ”。


*/

/*
  注意点:
  1.如果在创建之后， F.prototype 属性有了变化（ F.prototype = <another
    object> ），那么通过 new F 创建的新对象也将随之拥有新的对象作为
    [[Prototype]] ，但已经存在的对象将保持旧有的值。
  2.(*)处不推荐这么做,这么做会直接覆盖原本的对象,导致失去constructor对象,建议改成
    Rabbit.prototype.eats=true
*/