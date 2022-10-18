# JavaScript 笔试题



## 1.this

- 直接调用，this 指向 window。（严格模式下，this 为 undefined）
- 对象调用，this 指向调用对象。
- 箭头函数，没有自己的 this，this 指向外部上下文的 this。
- new 时，this 新生成的对象。
- call，apply，bind 可以改变 this 的指向。

### 1.1

```js
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
```

[答案](#this1.1)



## 2.var

- var 的变量提升优先于 function 的函数提升。
- var 的作用范围是函数作用域。
- var 定义在全局的变量会被挂在 window 上。

### 2.1

```js
function fn(a) {
  console.log(a);
  var a = 2;
  function a() {}
  console.log(a);
}

fn(1);
```

[答案](#var2.1)



### 2.2

```js
var f = true;
if(f === true) {
  var a = 10;
}
function fn() {
  var b = 30;
  c = 30;
}

fn();
console.log(a);
console.log(b);
console.log(c);
```

[答案](#var2.2)



### 2.3

```js
if('a' in window) {
  var a = 10;
}

console.log(a);
```

[答案](#var2.3)



### 2.4

```js
console.log(typeof fn);
function fn() {}
var fn;
```

[答案](#var2.4)



## 3.宏任务/微任务

**宏任务：**script，setTimeout，setInterval，I/0，UI rendering，setImmediate（node 才有）...

**微任务：**MutationObserver（浏览器才有），Promise.then() 或 catch()，fetch，axios，v8 gc，await 下方代码，process.nextTick（node 才有）

**过程：**

1. 讲整个脚本作为一个宏任务执行。
2. 同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列。
3. 当同步代码执行完毕，检查微任务队列，有则执行完毕。
4. 执行一个宏任务。
5. 重复 3 4

### 3.1 

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

async1();

new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});

console.log('script end');
```

[答案](#task3.1)



## 4.原型 & 原型链

```js
function Person(name) {
  this.name = name;
}
var p = new Person('king');

// 规律
p.__proto__ // Person.prototype
p.__proto__.__proto__ // Object.prototype
p.__proto__.__proto__.__proto__ // null
p.constructor // Person
p.prototype // undefined
Person.constructor // 空函数
Person.prototype // Person.prototype 对象
Person.prototype.constructor // Person
Person.prototype.__proto__ // Object.prototype
Person.__proto__ // Function.prototype
Function.prototype.__proto__ // Object.prototype
Function.__proto__ // Function.prototype
Object.__proto__ // Function.prototype
Object.prototype.__proto__ // null
```



### 4.1

```js
function Foo() {
  getName = function() {
    console.log(1);
  }
  return this;
}

Foo.getName = function() {
  console.log(2);
}

Foo.prototype.getName = function() {
  console.log(3);
}

var getName = function() {
  console.log(4);
}

function getName() {
  console.log(5);
}

Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```



**答案：**

```js
Foo.getName(); // 2
getName(); // 4
Foo().getName(); // 1
getName(); // 1
new Foo.getName(); // 2
new Foo().getName(); // 3
new new Foo().getName(); // 3
```



### 4.2

```js
var F = function() {}
Object.prototype.a = function() {
  console.log('a');
}
Function.prototype.b = function() {
  console.log('b');
}

var f = new F();
f.a();
f.b();
F.a();
F.b();
```

**答案：**

```js
f.a(); // 'a'
f.b(); // Uncaught TypeError: f.b is not a function
F.a(); // 'a'
F.b(); // 'b'
```



### 4.3

```js
function Foo() {
  Foo.a = function() {
    console.log(1);
  }
  this.a = function() {
    console.log(2);
  }
}

Foo.prototype.a = function() {
  console.log(3);
}

Foo.a = function() {
  console.log(4);
}

Foo.a(); // 4
let obj = new Foo();
obj.a(); // 2
Foo.a(); // 1
```



### 4.4

```js
function Dog() {
  this.name = 'puppy';
}
Dog.prototype.bark = () => {
  console.log('woof!woof!');
}
const dog = new Dog();
console.log(Dog.prototype.constructor === Dog); // true
console.log(dog.constructor === Dog); // true
console.log(dog instanceof Dog); // true
```



### 4.5

```js
var A = { n: 4399 };
var B = function() { this.n = 9999; };
var C = function() { var n = 8888; };

B.prototype = A;
C.prototype = A;

var b = new B();
var c = new C();
A.n++;
console.log(b.n); // 10000
console.log(c.n); // 4400
```



### 4.6

```js
function A() {}
function B(a) {
  this.a = a;
}
function C(a) {
  if(a) {
    this.a = a;
  }
}

A.prototype.a = 1;
B.prototype.a = 1;
C.prototype.a = 1;

console.log(new A().a); // 1
console.log(new B().a); // undefined
console.log(new C(2).a); // 2 
```

**答案：**



### 4.7

```js
function Parent {
  this.a = 1;
  this.b = [1, 2, this.a];
  this.c = { demo: 5 };
  this.show = function() {
    console.log(this.a, this.b, this.c.demo);
  };
}

function Child() {
  this.a = 2;
  this.change = function() {
    this.b.push(this.a);
    this.a = this.b.length;
    this.c.demo = this.a++;
  }
}

Child.prototype = new Parent();
var parent = new Parent();
var child1 = new Child();
var child2 = new Child();
child1.a = 11;
child2.a = 12;

parent.show(); // 1 [1, 2, 1] 5
child1.show(); // 11 [1, 2, 1] 5
child2.show(); // 12 [1, 2, 1] 5
child1.change();
child2.change();
parent.show(); // 1 [1, 2, 1] 5
child1.show(); // 5 [1, 2, 1, 11, 12] 5
child2.show(); // 6 [1, 2, 1, 11, 12] 5
```







## other

### o1

```js
var a = 10;
a.pro = 10;
console.log(a.pro + a);

var s = 'hello';
s.pro = 'world';
console.log(s.pro + s);
```

[答案](#oa1)

### o2

```js
const array = new Array(5).map(item => {
  return item = {
    name: '1'
  }
});

console.log(array);
```

[答案](#oa2)

### o3

```js
const array = ['1', '2', '3'].map(parseInt);

console.log(array);
```

[答案](#oa3)



## 答案

### this1.1

**输出：**10 2

**解释：**

第一个输出 10 因为 fn 没有被指定对象调用，所以 this 指向 window，所以是 10。

arguments 是类数组，包括所有的参数；rest 是数组，只包括多余参数，fn(x, y, ...rest) 。

第二个输出，this 指向 arguments，类似 arguments.fn()，所以按传入的两个参数，arguments 长度为 2，所以是 2。

[题目](#1.1)



### var2.1

**输出：**function a() {} 2

**解释：**

var 会先于 function 提升。所以代码可以如下转化，所以 结果是 function a() {}。

第二个 console.log 则打印 2。

```js
function fn(a) {
  var a;
  function a() {};
  console.log(a);
  a = 2;
  console.log(a);
}

fn(1);
```

[题目](#2.1)



### var2.2

**输出：**10 报错

**解释：**

var 的作用范围是函数作用域，if 的 {} 的作用域是块作用域。

所以 a 相当于定义在全局作用域。

b 在函数作用域中，所以外部访问不到 b。

c 没有使用 var，会自动被定义为全局变量，所以 c 为 30。

因为 b 报错，console.log(c) 无法执行。

[题目](#2.2)



### var2.3

**输出：**10

**解释：**首先 a 会变量提升，并且 a 不在函数作用域中，a 会挂在window 上，所以 'a' in window 返回 true，a 被赋值为 10，所以结果是 10。

代码可以看作如下。

```js
var a;
if('a' in window){
  a = 10;
}

console.log(a);
```

[题目](#2.3)



### var2.4

**输出：** "function"

**解释：**

因为变量提升优先于函数提升。所以代码可以看作如下。

```js
var fn;
function fn() {}
console.log(typeof fn);
```



[题目](#2.4)



### task3.1

**输出：**script start -> async1 start -> async2 -> promise1 -> script end ->async1 end -> promsie2 -> setTimeout

**解释：**执行同步任务 -> 微任务 -> 宏任务，然后是微任务和宏任务相互循环执行，async await 看作 promise 处理。

[题目](#3.1)



### oa1

**输出：**NaN undefinedhello

**解释：**

给基本类型添加属性，不报错，但是取值时为 undefined。

所以 undefined + 10 得到 NaN，undefined + hello 得到 undefinedhello。

[题目](#o1)



### oa2

**输出：**[empty x 5]

**解释：**

- new Array(5) 产生的数组是一个没有为各项赋值的数组。
- map 仅对已分配值的数组索引进行 callback 调用。

[题目](#o2)



### oa3

**输出：**[1, NaN, NaN]

**解释：**

parseInt(string, radix)：parseInt 接受两个参数，带转换字符串和转换进制。

- '1' 时，传递了值和索引，所以相当于 parseInt('1', 0)，返回 1。

- '2' 时，parseInt('2', 1)，不存在一进制，返回 NaN。

- ’3‘ 时，parseInt('3', 2)，二进制不存在 3，返回 NaN。

**说明：**

- parseInt(string, radix)：可以讲字符串按 radix 进制解析。
- toString(radix)：可以把数值转为 radix 进制字符串。

[题目](#o3)