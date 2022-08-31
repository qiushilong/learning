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

//查询总数
// User..countDocuments()

//大于小于
// User.find({ age: { $gt: 20, $lt: 24 } }).then(result => { console.log(result); })

//包含
// User.find({ hobbies: { $in: ['football'] } }).then(result => { console.log(result); })

//选中要查询的字段
// User.find().select('name email').then(result => { console.log(result); })
//选中不要查询的字段 字段加-   如-name,不查询名字

//排序(默认降序  使用-号改为升序)
// User.find().sort('name').then(result => { console.log(result); })

//skip 跳过多少条数据  limit限制查询数量
User.find().skip(1).limit(1).then(result => { console.log(result); })