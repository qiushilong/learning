## call、apply、bind函数

#### call()

call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。

##### 语法：

```js
func.call(thisArg[,arg1[,arg2[,...]]])
```

##### thisArg：

1. 不传，或者传 null，undefined。函数中的 this 指向 window 对象。
2. 原始数据类型。函数中的 this 指向该原始值的自动包装对象，如 String，Number等。
3. 函数名。函数中的 this 指向该函数的引用。
4. 对象。函数的 this 指向该对象。

##### 例子：

```js
const a = {
  name: '小明',
  age: 20,
}

function b(){
  console.log(this.name + this.age);
}

b.call(a); // 小明20
```



#### apply()

apply() 方法与 call() 方法的唯一区别在与，apply() 方法的第二个参数必须是一个数组或类数组对象，否则会报错。

##### 语法：

```js
func.apply(thisArg[,argsArray])
```



#### bind()

bind() 方法会创建一个新的函数（称为绑定函数）。

- bind() 方法是 ES5 新增。
- 传参与 call() 和 apply() 相似。
- 不会执行对应的函数，call() 和 apply() 会自动执行对应的函数。
- 返回对函数的引用。



##### 语法：

```js
func.bind(thisArg[,arg1[,arg2[,...]]])
```

##### 例子：

```js
const module = {
  x: 42,
  getX: function(){
    return this.x;
  }
}

const unBoundGetX = module.x;
console.log(unBoundGetX()); // undefined

const boundGetX = module.x.bind(module);
console.log(boundGetX); // 42

```

