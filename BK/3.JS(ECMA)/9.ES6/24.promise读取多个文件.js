const fs = require('fs');

//要求顺序读取为学,为学2,为学3

//不用promise
// fs.readFile('./为学.md', (err, data) => {
//     fs.readFile('./为学2.md', (err, data2) => {
//         fs.readFile('./为学3.md', (err, data3) => {
//             let result = data + '\n' + data2 + '\n' + data3;
//             console.log(result);
//         });
//     });
// });

//使用promise
//then可用连续调用,需要上一个then返回一个promise对象
const p = new Promise((resolve, reject) => {
  fs.readFile('./为学.md', (err, data) => {
    resolve(data);
  });
})

p.then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./为学2.md', (err, data) => {
      resolve([value, data]);
    });
  })
}).then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./为学3.md', (err, data) => {
      value.push(data);
      resolve(value);
    });
  })
}).then(value => {
  console.log(value.join('\n'));
})