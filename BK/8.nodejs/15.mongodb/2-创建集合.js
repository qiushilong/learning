const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('连接成功'); })
  .catch(() => { console.log('连接失败'); })

/*
创建集合
1.对集合设定规则
2.创建集合
*/
// 创建集合规则
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
})

//使用规则创建集合
const Course = mongoose.model('Course', courseSchema)
// 集合名为Course(在mongodb中会转为courses),集合模式为courseSchema