const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views', 'index6.art')

const html = template(views, {
  msg: "body",
  url: "./index.css"
})

console.log(html);