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

// 创建文章集合,文章的作者 关联user集合的id
const articleSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,//规定好的mongodb的id数据类型
    ref: 'User'
  }
})

const Article = mongoose.model('Article', articleSchema);

//创建
// Article.create({ title: '123', author: '6121df82bdba5a122484e7a8' });

//查询  populate(需要关联的对象)
Article.find.populate('author').then(result => { console.log(result); })