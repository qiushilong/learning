const fs = require('fs');

const promisify = require('util').promisify;//引入改造模块

const readFile = promisify(fs.readFile);//改造方法生成新的方法

async function main () {
  let data = await readFile('为学.md', 'utf-8');
  console.log(data);
}

main();