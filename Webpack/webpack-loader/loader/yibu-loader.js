// 异步 loader，等待异步 loader 处理完后才会继续处理
module.exports = function (content, map, meta) {
  const callback = this.async();

  setTimeout(() => {
    callback(null, content, map, meta);
  }, 1000);
};
