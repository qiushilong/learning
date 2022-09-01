const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views', 'index2.art')

const html = template(views, {
  name: '张三',
  age: 23,
  content: '<h1>hello<h1>'
})

console.log(html);