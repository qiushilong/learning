const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('连接成功'); })
  .catch(() => { console.log('连接失败'); })

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, '必须输入标题'],
    minlength: [2, '标题长度不能小于2'],
    maxlength: [5, '标题长度不能大于5'],
    trim: true  //去除两侧空格
  },
  publishData: {
    type: Date,
    default: Date.now  //默认时间
  },
  category: {
    type: String,
    enum: ['html', 'css', 'javascript'] //枚举值,category只能是这三种之一
  },
  num: {
    type: Number,
    min: 2, //最小值为2
    max: 100  //最大值为100
  },
  author: {
    type: String,
    validate: {
      validator: (val) => { }
      //自定义验证规则
      //返回boolean类型,true为成功
    }
  }
})

const Post = mongoose.model('Post', postSchema);

Post.create({
  title: '小东西',
  category: 'html5'
}).catch(err => {
  const error = err.errors;
  for (let attr in error) {
    console.log(error[attr]['message']);
  }
})

/*
required: true 必传字段
minlength: 3字符串最小长度
maxlength: 20字符串最大长度
min: 2数值最小为2
max: 100数值最大为100
enum: ['html'", 'css', 'javascript', 'node.js']trim: true去除字符串两边的空格
validate:自定义验证器
default:默认值
*/