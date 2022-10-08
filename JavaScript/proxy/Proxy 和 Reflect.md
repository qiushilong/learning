# Proxy 和 Reflect

一个 Proxy 对象包装另一个对象并拦截诸如**读取/写入属性**和**其他操作**，可以选择自行处理它们，或者透明的允许该对象处理它们。

Proxy 被用于许多库和某些浏览器框架。



## Proxy

语法：

```js
let proxy = new Proxy(target, handler);
```

- target -- 被包装的对象，可以是任何类型的数据。
- handler -- 代理配置：带有 “捕捉器” 的对象。比如 get 捕捉器用于读取 target 操作，set 捕捉器用来写入 target 的属性等。

对 proxy 进行操作，如果 handler 中存在相应的捕捉器，则它将运行，并且 Proxy 有机会对其进行处理，否则将直接对 target 进行处理。



```js
let target = {};
let proxy = new Proxy(target, {}); // 空的 handler 对象
proxy.test = 5; // 写入 proxy 对象

console.log(target.test); // 5
console.log(proxy.test); // 5
for(let key in proxy) console.log(key); // test
```

上面的例子，由于没有捕捉器，所有对 proxy 的操作都会直接转发给 target。

1. 写入操作 proxy.test = 会将值写入 target。
2. 读取操作 proxy.test 会从 target 返回对应的值。
3. 迭代 proxy 会从 target 返回对应的值。

没有任何捕捉器，proxy 相当于 target 的透明包装器（wrapper）。

![](D:\learning\JavaScript\Proxy\img\proxy1.png)

Proxy 是一种特殊的“奇异对象（exotic object）”。它没有自己的属性。如果 handler 为空，则透明的将操作转发给 target。

### 添加捕捉器

对于对象的大多数操作，JavaScript 规范中有一个所谓的“内部方法”，它描述了最底层的工作方式。例如 [[Get]] 用于读取属性的内部方法，[[Set]] 用于写入属性的内部方法，等等。这些方法仅在规范中使用，我们不能直接通过方法名调用它们。

Proxy 捕捉器会拦截这些方法的调用。命名参考如下。

| 内部方法              | Handler 方法             | 何时触发                                                     |
| --------------------- | ------------------------ | ------------------------------------------------------------ |
| [[Get]]               | get                      | 读取属性                                                     |
| [[Set]]               | set                      | 写入属性                                                     |
| [[HasProperty]]       | has                      | in 操作符                                                    |
| [[Delete]]            | deleteProperty           | delete 操作符                                                |
| [[Call]]              | apply                    | 函数调用                                                     |
| [Construct]           | construct                | new 操作符                                                   |
| [[GetPrototypeOf]]    | getPrototypeOf           | Object.getPrototypeOf                                        |
| [[SetPrototypeOf]]    | setPrototypeOf           | Object.setPrototypeOf                                        |
| [[IsExtensible]]      | isExtensible             | Object.isExtensible                                          |
| [[PreventExtensions]] | preventExtensions        | Object.preventExtensions                                     |
| [[DefineOwnProperty]] | defineProperty           | Object.defineProperty，Object.defineProperties               |
| [[GetOwnProperty]]    | getOwnPropertyDescriptor | Object.getOwnPropertyDescripror，for ... in，Object.keys/values/entries |
| [[OwnPropertyKeys]]   | ownKeys                  | Object.getOwnPropertyNames，Object.getOwnPropertySymbols，for ... in，Object.keys/values/entries |



**📌对于不变量（Invariant）**

JavaScript 强制执行某些不变量 -- 内部方法和捕捉器必须满足的条件。

其中大多数用于放回值。

- [[Set]] 如果值已成功写入，必须返回 true，否则返回 false。
- [[Delete]] 如果已成功删除该值，必须返回 true，否则返回 false。
- ... 依此类推。

还有其他一些不变量，例如：

- 应用于代理（proxy）对象的 [[GetPrototypeOf]]，必须返回与用于被代理对象的 [[GetPrototypeOf]] 相同的值。读取代理对象的原型必须始终返回被代理对象的原型。

捕捉器可以拦截这些操作，但是必须遵循上面这些规则。



### 使用

#### get

get(target, property, receiver)

- target -- 目标对象，该对象作为第一个参数传递给 new Proxy。
- property -- 目标属性名。
- receiver -- 如果目标属性是一个 getter 访问器属性，则 receiver 就是本次读取属性所在的 this 对象。通常，这就是 proxy 对象本身（或者，如果我们从 proxy 继承，则是从该 proxy 继承的对象）。

```js
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if(prop in target) {
      return target[prop];
    }else {
      return 0;
    }
  }
})

console.log(numbers[1]); // 1
console.log(number[123]); // 123 （即使没有这个数组项）
```



#### set

set(target, property, value, receiver)

- target -- 目标对象，该对象被作为一个参数传递给 new Proxy。
- property -- 目标对象属性。
- value -- 目标属性的值。
- receiver -- 同 get receiver。

```js
let numbers = [];

numbers = new Proxy(numbers, {
  set(target, prop, val) {
    if(typeof val === 'number') {
      target[prop] = val;
      return true;
    }else {
      return false;
    }
  }
})

numbers.push(1);
numbers.push(2);

numbers.push('test'); // TypeError （proxy 的 set 返回 false）
```

我们不必重写诸如 push 和 unshift 等添加元素的数组方法，就可以在其中添加检查，因为在内部它们使用代理所拦截的 [[Set]] 操作。



## Reflect

Reflect 是一个内建对象，可简化 Proxy 的创建。

Reflect 对象使调用这些内部方法成为了可能。它的方法是内部方法的最小包装。

| 操作              | Reflect 调用                      | 内部方法   |
| ----------------- | --------------------------------- | ---------- |
| obj[prop]         | Reflect.get(obj, prop)            | [[Get]]    |
| obj[prop] = value | Reflect.set(obj, prop, value)     | [[Set]]    |
| delete obj[prop]  | Reflect.deleteProperty(obj, prop) | [[Delete]] |
| ...               |                                   |            |

```js
let user = {};

Reflect.set(user, 'name', 'john');

console.log(user.name);
```

Reflect 允许我们将操作符作为函数执行调用。

对于每个可被 Proxy 捕获的内部方法，在 Reflect 中都有一个对于的方法，其名称和参数与 Proxy 捕捉器相同。

所以我们可以使用 Reflect 来将操作转发给原始对象。

```js
let user = {
  name: 'john'
};

user = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, val, receiver) {
    console.log(`SET ${prop} = ${val}`);
    return Reflect.set(target, prop, val, receiver);
  }
});

let name = user.name;
user.name = 'Pete';
```



### Reflect.get  和 target[prop] 的区别

Reflect.get 比 target[prop] 更好。

```js
let user = {
  _name: 'Guest',
  get name() {
    return this._name;
  }
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    return target[prop]; // (*)
  }
});

let admin = {
  __proto__: userProxy,
  _name: 'Admin'
}

console.log(admin.name); // Guest（返回不是 Admin）
```

以上代码，如果移除代理就会变得正常。

实际过程：

- 当我们读取 admin.name 时，由于 admin 对象自身没有对于的属性，搜索将转到其原型。
- 原型是 userProxy。
- 从代理读取 name 属性时，get 捕捉器会被触发，并从原始对象返回 target[prop] 属性，在 (*) 行。

为了解决这种情况，我们需要 get 捕捉器的第三个参数 receiver。它保证正确的 this 传递给 getter。在我们的例子中是 admin。

如何把上下文传递给 getter？对于一个常规函数，我们可以使用 call/apply，但这是一个 getter，它不能被调用，只能被访问。

Reflect.get 可以做到。

```js
let user = {
  _name: 'Guest',
  get name(){
    return this._name;
  }
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    return Reflect.get(target, prop, receiver);
  }
});

let admin = {
  __proto__: userProxy,
  _name: 'Admin'
};

console.log(admin.name); // Admin
```

现在 receiver 保留了正确 this 的引用（即 admin），该引用是在（*）行中被通过 Reflect.get 传递给 getter 的。



## Proxy 的局限性