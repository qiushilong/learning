const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views', 'index.art')

//template方法
// template('模板路径',{模板中的数据})
//返回拼接好的字符串
const html = template(views, {
  name: '张三',
  age: 23
})

console.log(html);