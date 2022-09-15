// 方式1
module.exports=function(content){
  return content;
}

// 方式2
module.exports=function(content,map,meta){

  /**
   * 参数1：err 代表是否有错误
   * 参数2：content 处理后的结果
   * 参数3：source map 继续传递
   * 参数4：给下一个 loader 传递参数
   */

  this.callback(null,content,map,meta)
}