## this



#### 介绍

与其他语言相比，函数的 this 关键字在 JavaScript 中表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别。

在绝大多数情况下，函数的调用方式决定了 this 的值（**运行时绑定**）。this 不能在执行期间被赋值，并且在每次函数被调用 this 的值也可能会不同。ES5 引入了 **bind** 方法来设置函数的 this 值，而不用考虑函数如何被调用。ES2015 引入了**箭头函数**，箭头函数不提供自身的 this 绑定（ this 的值将保持为闭合词法上下文的值）。



```js
var prop = 10;
var test = {
  prop: 20,
  func: function(){
	return this.prop;
  }
}
var func = test.func;
console.log(func()); // 10
console.log(test.func()); // 20

```

#### this 的值

this 的值是当前执行上下文（global，function 或 eval ）的一个属性，在非严格模式下总是指向一个对象，在严格模式下可以是任何值。



#### 描述

##### 全局上下文

无论是否在严格模式下，在全局执行环境中，this 都是指向全局对象。

```js
// 在浏览器中，window 对象同时也是全局对象
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

注：你可以使用 globalThis 获取全局对象，无论你的代码是否在当前上下文运行。



##### 函数上下文

在函数内部，this 的值取决于函数被调用的方式。

```js
function f(){
  return this;
}

// 浏览器中
f1() === window; // true

// 在 Node 中
f1() === globalThis; // true
```

严格模式下

```js
function f2(){
  "use strict";
  return this;
}

f2() === undefined; // true
```



##### 类上下文

this 在类中的表现和在函数中类似，因为类本质上也是函数，但是有一些区别和注意事项。

在类的构造函数中，this 是一个常规对象。类中所有非静态的方法都会被添加到 this 的原型中。

```js
class Example{
  constructor(){
    const proto = Object.getPrototypeof(this);
    console.log(Object.getOwnPropertyNames(proto));
  }
  first(){}
  second(){}
  static third(){}
}

new Example(); // ['constructor', 'first', 'second']
```



##### 箭头函数

在箭头函数中，this 与封闭词法环境的 this 保持一致。在全局代码中，它将被设置为全局对象。

```js
var globalObject = this;
var foo = () => this;
console.log(foo() === globalObject); // true

// 注意：call、apply、bind 对箭头函数无效
var obj = {foo: foo};
console.log(obj.foo() === globalObject); // true
console.log(foo.call(obj) === globalObject); // true
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```



##### 构造函数

当一个函数用作构造函数时（使用 new 关键字），它的 this 被绑定到正在构造的新对象。

```js
function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // 37
```

