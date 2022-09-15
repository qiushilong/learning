// pitch loader 会优先执行
// pitch return 时会熔断
module.exports = function (content) {
  return content;
};

module.exports.pitch = function () {
  console.log("pitch");
};
