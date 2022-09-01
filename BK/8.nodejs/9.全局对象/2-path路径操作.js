/*
  为什么要进行路径拼接
    1.不同操作系统的路径分隔符不统一,系统可能在linux上运行
      windows是\ /
      linux是 /
    2.使用纯相对路径是相对打开cmd的目录(除了require的相对路径),
      应当使用path把__dirname拼接相对路径
    
  路径拼接api
  path.join(str1,str2[,str3,str4,...])
  返回 str1\str2...
*/
const path = require('path');
let a = path.join(__dirname, 'a.txt');
console.log(a);