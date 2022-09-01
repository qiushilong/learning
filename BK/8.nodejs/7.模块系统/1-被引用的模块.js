/*
    Node.js提供了exports和require两个对象
    exports是模块公开的接口
    require用于从外部获取一个模块的接口,即所获取模块的exports对象
*/
//提供函数
// exports是module.exports的别名(地址引用关系),一般来说他两是一样的
// 当exports和moudle.exports指向的不是一个对象,以module.exports为准
exports.world = function () {
  console.log('hello world');
}

/*
  加上这一句,以这一句为准
  moudle.exports={
    'name':'zs'
  }
*/
