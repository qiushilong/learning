// process.nextTick
// 每次事件循环完一次，称为一次滴答
// 当我们传递一个函数给 process.nextTick() 时，会在下一事件循环滴答开始前执行

// setTimeout 将在下一个 tick 结束时执行，比 nextTick 执行晚的多

// setImmediate 在你想要执行一段异步代码，并希望快速执行时使用（类似 setTimeout(() => {}, 00)，但更早执行）
// 延迟为 0 毫秒的 setTimeout 回调与 setImmediate 非常相似。 执行顺序将取决于各种因素，但它们都将在事件循环的下一次迭代中运行。

console.log('Start');

setImmediate(() => {
    console.log('setImmediate');
});

setTimeout(() => {
  console.log('setTimeout');
}, 0);

process.nextTick(() => {
  console.log('process.nextTick');
});

Promise.resolve().then(() => {
  console.log('promise.then');
});

console.log('End');

// 结果 
// Start
// End
// process.nextTick
// promise.then
// setTimeout
// setImmediate