// raw loader 接收到的数据是二进制的 buffer 数据
// 一般用来处理非 js 文件

module.exports=function(content){
  return content;
}

module.exports.raw=true;