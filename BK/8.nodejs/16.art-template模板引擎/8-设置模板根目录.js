const template = require('art-template');
const path = require('path');
const dateFormat = require('dateformat');


template.defaults.imports.dateFormat = dateFormat;

//设置模板根目录
template.defaults.root = path.join(__dirname, 'views')

//设置模板的默认后缀
template.defaults.extname = '.art';

const html = template('index7', {
  date: new Date()
})

console.log(html);