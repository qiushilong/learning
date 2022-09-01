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

    then(onFulfilled, onRejected) {

        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { };
        onRejected = typeof onRejected === 'function' ? onRejected : () => { };

        const newPromise = new MyPromise((resolve, reject) => {
            if (this.state === FULFILLED) {
                let result=onFulfilled(this.value);
                resolvePromise(newPromise, result, resolve, reject);
            }
            if (this.state === REJECTED) {
                let result=onRejected(this.reason);
                resolvePromise(newPromise, result, resolve, reject);
            }
            if (this.state === PENDING) {
                this.onResolvedCallbacks.push(() => {
                    let result=onFulfilled(this.value);
                    resolvePromise(newPromise, result, resolve, reject);
                })
                this.onRejectedCallbacks.push(() => {
                    let result=onRejected(this.reason);
                    resolvePromise(newPromise, result, resolve, reject);
                })
            }
        })

        return newPromise;
    }
}


function resolvePromise(newPromise, result, resolve, reject) {
    // 如果相等了，说明return的是自己，抛出类型错误并返回
    if (newPromise === result) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    if (result instanceof MyPromise) {
        result.then(resolve, reject)
    } else {
        resolve(result)
    }
}


new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
}).then((val) => {
    console.log(val);
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 1000)
    })
}).then((val) => {
    console.log(val);
}, (val) => {
    console.log(val);
})

