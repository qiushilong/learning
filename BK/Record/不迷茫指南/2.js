const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    if (typeof executor !== 'function')
      throw new TypeError(`Promise resolver ${executor} is not a function`);
    this.state = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = value => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn());
      }
    }
    const reject = reason => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    const promise2 = new MyPromise((resolve, reject) => {
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
      onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };

      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      }
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      }
      if (this.state === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }
}

function resolvePromise(x, promise2, resolve, reject) {
  if (x === promise2)
    return reject(new TypeError('Chaining cycle detected for promise'));
  if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
    let called;
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called)
            return;
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, r => {
          if (called)
            return;
          called = true;
          reject(r);
        });
      } else {
        resolve(x);
      }
    } catch (err) {
      if (called)
        return;
      called = true;
      reject(err);
    }
  } else {
    resolve(x);
  }
}

