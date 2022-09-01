const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views', 'index5.art')

const html = template(views, {

})

console.log(html);