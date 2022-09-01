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

// 删除一个(如果存在多个符合条件的,删除第一个)
// 返回删除的文档
User.findOneAndDelete({ _id: '111' }).then(result => { console.log(result); })

// 删除多条文档,不写条件,会删除所有文档
// 返回一个对象{n:x,ok:1} n表示删除了x条文档,ok为1表示删除成功
User.deleteMany({}).then(result => { console.log(result); })