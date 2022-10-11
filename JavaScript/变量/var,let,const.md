## var let const

var，let 都是 javascript 中定义变量的方式。

const 则用来定义常量。

### var 

适用于 ECMAScript 的所有版本。

#### 声明作用域

var 的声明作用域是函数作用域或全局作用域

```js
function test(){
  var message = 'hi'; // message 仅在函数作用域中有效，函数执行完后会自动销毁
}
test();
console.log(message); // ReferenceError: message is not defined
```

如果此处不使用 var，message 则会被定义为全局变量（不推荐使用）

```js
function test(){
  message = 'hi'; // 相当于在全局定义了 window.message = 'hi'
}
test();
console.log(message); // hi
```

#### 变量提升（声明提升）

使用 var 声明的变量会自动提升到函数作用域的顶部

```js
function foo(){
  console.log(age);
  var age = 26;
}
foo(); // undefined
```

以上代码等价于

```js
function foo(){
  var age; // 变量提升或者说是预加载，将 age 的定义提前了
  console.log(age);
  age = 26;
}
foo(); // undefined
```

#### 重复声明

```js
function foo(){
  var age = 16;
  var age = 26;
  var age = 36;
  console.log(age);
}
foo(); // 36
```

也可以看做

```js
function foo(){
  var age;
  age = 16;
  age = 26;
  age = 36;
  console.log(age);
}
foo(); // 36
```

#### 全局声明

var 在全局环境定义的变量会被挂到 window 上。

```js
var name = 'Matt'; // 相当于 window.name = 'Matt'
console.log(window.name); // Matt
```



### let

let 和 var 一样，也是用来定义变量。

ES 2015（ES6）版本及以后才能使用 let 声明。

#### 声明作用域

let 是块作用域，var 是函数作用域。

```js
if(true){
  var name = 'Matt';
  console.log(name); // Matt
}
console.log(name); // Matt
```

因为 var 是函数作用域，不受块的局限，所以在外面也能拿到 name。

```js
if(true){
  let name = 'Matt';
  console.log(name); // Matt
}
console.log(name); // ReferenceError: name is not defined
```

而 let 是块作用域，所以 name 在 if 块中定义，外部不能使用到 name。

#### 暂时性死区（相反于变量提升）

在 let 中，没有变量提升，即不能在定义前使用。所以在 let 声明之前的瞬间称为 “暂时性死区”（temporal dead zone），在此阶段对变量的调用都会抛出 ReferenceError。

```js
console.log(name); // undefined
var name = 'Matt';

console.log(age); // ReferenceError: age is not defined
let age = 26;
```

#### 同块作用域不允许重复声明

在 var 声明变量时，由于声明会被提升，javascript 引擎会自动将多余的声明在作用域顶部合并为一个声明。

```js
var name = 'Matt';
let age = 26;

var name = 'Nicholas'; 
let age = 36; // SyntaxError: Identifier 'age' has already been declared
```

同样的

```html
<script>
  var name = 'Matt';
  let age = 26;
</script>
<script>
  var name = 'Nicholas';
  let age = 36; // SyntaxError: Identifier 'age' has already been declared
</script>
```



### var 和 let 的区别

1. 作用范围，var 的作用范围是函数作用域，let 的作用范围是块。
2. var 有变量提升，let 没有（暂时性死区）。
3. var 可以重复声明，let 不能重复声明。
4. var 在全局定义会挂在 window 上，let 则不会。

5. var 在所有 javascript 版本都可以使用，let 需要 es6 及以后。



### const

const 的行为和 let 基本相同。

区别在于 const 用来定义常量，初始化时必须赋值，且后续不能修改。

```js
const name; // SyntaxError: Missing initializer in const declaration
```

```js
const age = 26;
age = 36; // TypeError: Assignment to constant variable
```

const 声明的限制只适用于它指向的变量的引用。换句话说，如果 const 变量指向一个对象，修改对象内部的属性不违法 const 的限制，同样数组也是。

```js
const obj = { name: 'Matt' };
obj.name = 'Nicholas';
console.log(obj.name); // Nicholas

const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
```



### IIFE

可以通过 IIFE 将 var 改造为块级作用域。

```js
if(true){
  var name = 'Matt';
  console.log(name); // Matt
}
console.log(name); // Matt
```



```js
if(true){
  (function(){
    var name = 'Matt';
    console.log(name); // Matt
  })();
}
console.log(name); // ReferenceError: name is not defined
```

可以观察到 webpack 打包后的 javascript 代码就是这种表现形式，来保证兼容性。



### 例子🌰：

#### 1.

```js
for (var i = 0; i < 5; ++i){ 
 // 循环逻辑 
} 
console.log(i); // 5

for(let i = 0; i < 5; ++i){
  // 循环逻辑 
}
console.log(i); // ReferenceError: i is not defined
```
#### 2.

```js
for(var i = 0; i < 5; ++i){
  setTimeout(() => console.log(i), 0);
}
// 结果 5，5，5，5，5
for(let i = 0; i < 5; ++i){
  setTimeout(() => console.log(i), 0);
}
// 结果 0，1，2，3，4
```

