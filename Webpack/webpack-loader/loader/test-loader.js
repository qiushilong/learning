/**
 * loader 就是一个函数
 * 当 webpack 解析资源是，会调用相应的 loader
 * loader 接收到文件内容作为参数，返回内容出去
 * @param {*} content 文件内容
 * @param {*} map source map
 * @param {*} meta 其他 loader 传递的数据
 * @returns 
 */

module.exports=function(content,map,meta){
  console.log(content);
  return content;
}