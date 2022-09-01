// 第一步:导入react,react-dom
import React from 'react';
import ReactDOM from 'react-dom';

// 第二步:创建react元素,使用jsx
// 脚手架中默认配置了babel,不用导入包
const title = <h1>Hello React by jsx</h1>

// 第三步:渲染react元素
ReactDOM.render(
  title,
  document.getElementById('root')
);
