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
  创建文档的第二种方式
*/
Course.create({ name: 'javascript', author: 'you', isPublished: 'true' }, (err, result) => {
  console.log(err);
  console.log(result);
})
// create方法返回promise对象，回调函数可以用then代替