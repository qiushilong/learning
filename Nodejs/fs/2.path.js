const path = require('path');

const mottoPath = '/home/node/motto.js';

console.log(path.dirname(mottoPath)) // /home/node
console.log(path.basename(mottoPath)) // motto.js
console.log(path.extname(mottoPath)) // .js

// 不获取扩展名
console.log(path.basename(mottoPath, path.extname(mottoPath))) // motto

// join：连接多个部分
console.log(path.join('/', 'home', 'node', 'motto.js')) // /home/node/motto.js

// resolve：获取当前运行命令的相对路径并连接参数
console.log(path.resolve('motto.txt'))

// 
console.log(path.resolve('node', 'motto.txt'))

// 如果第一个参数以 '/' 开头，则表示它是绝对路径
console.log(path.resolve('/etc', 'motto.txt')) // /etc/motto.txt

// normalize：当包含诸如 . 或者 .. 或双斜线时，会尝试算出实际路径
console.log(path.normalize('/home/node/../motto.txt')) // /home/motto.txt

// resolve 和 normalize 都不会检查路径是否真实存在