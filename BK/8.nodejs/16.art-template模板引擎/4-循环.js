const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views', 'index4.art')

const html = template(views, {
  users: [
    {
      name: '张三',
      age: 20,
      sex: '男'
    },
    {
      name: '李四',
      age: 30,
      sex: '男'
    },
    {
      name: '王五',
      age: 40,
      sex: '女'
    },
  ]
})

console.log(html);