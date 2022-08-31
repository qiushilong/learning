// @flow

// 字面量类型
// type只能是三种值的一种
const type: 'success' | 'warning' | 'danger' = 'success';

// maybe


// mixed  可以为任何值
const value: mixed = 10;

// any    可以为任何值
const value2: any = 20;

// mixed和any的区别:mixed是弱类型,any是强类型