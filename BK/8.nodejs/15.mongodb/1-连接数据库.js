const mongoose = require('mongoose');

// 没有数据库也可以,再插入时,如果发现没有这个数据库,则会自动创建
//connect方法返回一个promise对象
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('连接成功');
  }, () => {
    console.log('连接失败');
  })