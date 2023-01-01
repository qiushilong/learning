// ?: 表示不记录分组
let msg = `
https://www.baidu.com
`;

let reg = /https?:\/\/(\w+\.\w+\.(?:com|cn|org))/;

console.log(msg.match(reg));
