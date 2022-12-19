# defineProperty

```js
let person = {
  name: '张三',
  sex: '男',
  age: 18,
};

Object.defineProperty(person, 'age', {
    value: 18,
    enumerable: true, // 控制属性是否可以被枚举，默认 false
    writable: true, // 控制属性是否可以被修改，默认 false
    configurable: true, // 控制属性是否可以被删除，默认 false
    // 当有人读取 age 时，会调用 get 方法
    get() {
        return 18;
    },
    // 有人修改了 age 时，会调用 set 方法
    set(value) {
        
    }
})
```

```JS
let number = 18;

let person = {
  name: '张三',
  sex: '男',
  age: number,
};

Object.defineProperty(person, 'age', {
    value: 18,
    enumerable: true, // 控制属性是否可以被枚举，默认 false
    writable: true, // 控制属性是否可以被修改，默认 false
    configurable: true, // 控制属性是否可以被删除，默认 false
    // 当有人读取 age 时，会调用 get 方法
    get() {
        return 18;
    },
    // 有人修改了 age 时，会调用 set 方法
    set(value) {
        
    }
})
```

通过 defineProperty 连接了 number 和 person



## 数据代理

```js
let obj1 = {
    x: 100,
    y: 200
}

Object.defineProperty(obj1, 'x', {
    get() {
        return obj1.x;
    },
    set(value) {
        obj1.x = value;
    }
})
```

