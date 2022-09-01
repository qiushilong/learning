## 手写Promise

#### 题纲

- promise的3种状态
- promise采用的模式---观察者模式，发布订阅者模式
- promise的规范---promise/A+、promise/A、promise/B、promise/C、

- promise API
- promise规则
- promise实现
- 验证我们写的promise是否符合A+规范，使用promises-aplus-tests
- Promise规范官方版翻译



#### 讲ppt

1.promise类实现，原型链实现

2.设计模式

3.微任务，宏任务

4.this指向，call，apply，bind



#### 高阶函数

参数或者返回值为函数。



#### 柯里化

把fn(1,2,3)转成fn(1)(2)(3)，并达到同样的效果。



#### Promise A+ 规范 (https://promisesaplus.com/)



#### promise的3种状态

pending：待定态

fulfilled：成功态

rejected：失败态

promise的状态是不受外界影响的，而且状态的改变只有两种

pending->fulfilled

pending->rejected



#### 使用Promise

```js
const pms=new Promise((resolve,reject)=>{
    this.setTimeout(()=>{
        if(...)
           resolve(value);
        else
           reject(reason);
    },1000)
})

pms.then(()=>{},()=>{})
```



#### 术语

Promise：

then：

thenable：

executor：

value：

reason：



#### 规则

- executor必须是一个函数，当executor不是一个函数时，抛出Promise resolver xxx is not a function错误，

  executor会在构造阶段立刻执行。

- executor内置resolve和reject方法，调用resolve会使Promise由待定到成功并返回成功值value，调用reject会使Promise由待定到失败并返回失败原因reason。

- 当executor执行时发生异常，会调用reject方法返回错误信息。

- then方法接收两个参数，成功的回调onFulfilled，失败的回调onRejected。

- 

#### MyPromise 1.0

```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {

  state = PENDING;
  value = undefined;
  reason = undefined;

  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError(`Promise resolver ${executor} is not a function`);
    }

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
      }
    }

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
      }
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then (onFulfilled, onRejected) {
    if (this.state === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.state === REJECTED) {
      onRejected(this.reason);
    }
  }
}
```



#### MyPromise 2.0

1.0只支持同步的操作，并非Promise的核心，Promise的核心在于异步。

如果执行then方法时，executor还在执行中，则把onFulfilled，onRejected方法存入对应数组中，当executor执行完后进行调用。

之所以使用数组，是因为链式调用可能存在多个then，每个then的onFulfilled，onRejected都不能丢。

```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {

  state = PENDING;
  value = undefined;
  reason = undefined;

  onResolvedCallbacks = [];
  onRejectedCallbacks = [];

  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError(`Promise resolver ${executor} is not a function`);
    }

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;

        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;

        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then (onFulfilled, onRejected) {

    onFulfilled=typeof onFulfilled ==='function'?onFulfilled:()=>{};
    onRejected=typeof onRejected ==='function'?onRejected:()=>{};

    if (this.state === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.state === REJECTED) {
      onRejected(this.reason);
    }
    if (this.state === PENDING) {
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      })
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      })
    }
  }
}
```



#### MyPromise 3.0

promise的链式调用，我们需要在then方法中返回一个新的Promise

链式调用原则：

- then必须返回一个promise
- 如果onFulfilled或者onRejected返回一个值x，运行Promise解析过程[[Resolve]](newPromise,x)
- 如果onFulfilled不是一个函数并且promise1处于fulfilled，promise2必须fulfillled并且和promise1返回相同value
- 如果onRejected不是一个函数并且promise1处于rejected，promise2必须rejected并且和promise1返回相同reason

```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {

  state = PENDING;
  value = undefined;
  reason = undefined;

  onResolvedCallbacks = [];
  onRejectedCallbacks = [];

  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError(`Promise resolver ${executor} is not a function`);
    }

    const resolve = value => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;

        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    const reject = reason => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;

        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then (onFulfilled, onRejected) {

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };

    const promise2 = new MyPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      if (this.state === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        })
      }
    })

    return promise2;
  }

}

function resolvePromise (promise2, x, resolve, reject) {

  // 不能返回自己，会导致无限循环
  if (x === promise2)
    return reject(new TypeError('Chaining cycle detected for promise'));

  let called;

  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      const then = x.then;
      // 如果返回值是一个thenable的值，需要拿到最后的resolve或者reject值
      if (typeof then === 'function') {

        then.call(x,
          y => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          r => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    resolve(x);
  }
}

```

