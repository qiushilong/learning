const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('连接成功'); })
  .catch(() => { console.log('连接失败'); })

const courseSchema = mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
})


const Course = mongoose.model('Course', courseSchema);

/*
  创建文档
  创建文档实际上就是向集合中插入数据
  1.创建集合实例
  2.调用实例对象下的save方法将数据保存到数据库中
*/

//1.创建集合实例
const course = new Course({
  name: 'node.js mongodb',
  author: 'me',
  isPublished: true
});

//2.调用实例对象下的save方法将数据保存到数据库中
course.save();