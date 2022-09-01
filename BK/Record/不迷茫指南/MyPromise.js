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

MyPromise.defer = MyPromise.deferred = function () {
  let dfd = {}
  dfd.promise = new MyPromise((resolve,reject)=>{
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}
module.exports = MyPromise;