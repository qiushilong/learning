const template = require('art-template');
const path = require('path');
const dateFormat = require('dateformat');

//导入模板变量
template.defaults.imports.dateFormat = dateFormat;

const views = path.join(__dirname, 'views', 'index7.art')

const html = template(views, {
  date: new Date()
})

console.log(html);