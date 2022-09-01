const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('连接成功'); })
  .catch(() => { console.log('连接失败'); })

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
  hobbies: [String]
});

const User = mongoose.model('User', userSchema);

// User.create({
//   name: '张三',
//   age: 23,
//   email: '123@qq.com',
//   password: '123',
//   hobbies: ['football', 'basketball']
// }).then(() => { console.log('插入成功'); })

// User.create({
//   name: '李四',
//   age: 24,
//   email: '1234@qq.com',
//   password: '1234',
//   hobbies: ['football', 'basketball', '台球']
// }).then(() => { console.log('插入成功'); })

// User.create({
//   name: '王五',
//   age: 25,
//   email: '12345@qq.com',
//   password: '12345',
//   hobbies: ['football', '台球']
// }).then(() => { console.log('插入成功'); })



/* 查询user集合中的所有文档*/
User.find().then(result => console.log(result))

/* 查询指定条件的文档 */
User.find({ _id: '6121df82bdba5a122484e7a8' }).then(result => console.log(result))

/* 
  findOne()方法
  查询指定条件的一条文档(第一条符合的条件)
  没指定条件,默认返回第一条数据
*/
User.findOne({ name: '李四' }).then(result => console.log(result))