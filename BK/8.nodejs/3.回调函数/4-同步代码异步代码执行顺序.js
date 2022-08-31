setTimeout(() => {
  console.log('hello');
}, 10)
for (let i = 0; i < 10000; i++) {
  console.log(i);
}

//js会等到同步代码执行完成后才执行异步代码`