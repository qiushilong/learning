// 把 h标签 换成 p标签
let msg = `
<h1>h1 msg</h1>
<span>span msg</span>
<h2>h2 msg</h2>
`;

let reg = /<(h[1-6])>([\s\S])+<\/\1>/g;
// 方法1
console.log(msg.replace(reg, `<p>$2</p>`));

// 方法2
console.log(msg.replace(reg, (msg, p1, p2) => `<p>${p2}</p`));
