...
class MyPromise {
  ...

  all(promises) {
    const result = [];
    return new MyPromise((resolve, reject) => {
      promises.forEach((item, index) => {
        if (item.then) {
          item.then(value => {
            result.push(value);
            if (index === promises.length - 1) resolve(result);
          }, reason => {
            reject(reason);
          })
        } else {
          result.push(item)
          if (index === promises.length - 1) resolve(result);
        }
      })
    })
  }
}

...
class MyPromise {
  ...

  allSettled(promises) {
    const result = [];
    return new MyPromise((resolve, reject) => {
      promises.forEach((item, index) => {
        if (item.then) {
          item.then(value => {
            result.push({status :'fulfilled',value});
            if (index === promises.length - 1) resolve(result);
          }, reason => {
            result.push({status :'rejected',reason});
            if (index === promises.length - 1) resolve(result);
          })
        }
      })
    })
  }
}

...
class MyPromise {
  ...

  race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((item, index) => {
        if (item.then) {
          item.then(value => {
            resolve(value);
          }, reason => {
            reject(reason);
          })
        }
      })
    })
  }
}
