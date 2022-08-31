function getMsg (callback) {

  // 异步任务,完成后调用回调函数,这样异步任务的数据可用传出
  setTimeout(function () {
    callback('hello!')
  }, 2000)

}

getMsg(function (data) {
  console.log(data);
})