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

// 更新单个,返回受影响的数据条数,和修改结果
User.updateOne({ name: '李四' }, { name: '李狗蛋' }).then(result => { console.log(result); })

// 更新多个,返回受影响的数据条数,和修改结果
// User.updateMany({查询条件}, {修改的值}).then(result => { console.log(result); })