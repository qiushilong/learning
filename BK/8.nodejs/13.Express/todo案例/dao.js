const fs = require('fs');
const path = require('path');

exports.getData = function () {
  return new Promise((resolve, reject) => {
    const all_path = path.join(__dirname, './data.json');
    fs.readFile(all_path, (err, data) => {
      if (err) {
        return reject('error');
      }
      return resolve(data.toString());
    });
  })
}

exports.setData = function (msg) {
  const all_path = path.join(__dirname, './data.json');
  fs.writeFile(all_path, msg, (err) => {
    if (err) {
      return '写入错误';
    }
  });
}