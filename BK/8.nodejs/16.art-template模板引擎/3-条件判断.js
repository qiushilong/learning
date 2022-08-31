const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views', 'index3.art')

const html = template(views, {
  name: '张三',
  age: 20
})

console.log(html);