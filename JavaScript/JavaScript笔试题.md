# JavaScript 笔试题



## 1.this

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