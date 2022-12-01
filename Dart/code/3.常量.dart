// const 定义，一开始要确定值，后续不能修改
// final 定义，一开始可以不确定值，运行时确定，惰性初始化
const UI = 3.14;
final UI2 = 3.14;

// const time = new DateTime.now(); // 报错，time 在未运行时无值
final time = new DateTime.now();
