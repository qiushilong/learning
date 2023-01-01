// 提高效率
let msg = "QQ 群：111111，222222，33333333，xxxxxxxxxxxxx";

let reg = /(\d+)，?/y;

reg.lastIndex = 5;
let qq = [];
while ((res = reg.exec(msg))) qq.push(res[1]);
console.log(qq);
