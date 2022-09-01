// 在js中可以使用函数进行嵌套,嵌套函数在 JavaScript 中很常见

function sayHiBye (firstName, lastName) {
  // 辅助嵌套函数使用如下
  function getFullName () {
    return firstName + " " + lastName;
  }
  alert("Hello, " + getFullName());
  alert("Bye, " + getFullName());
}

// 一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）
// getFullName可以访问到sayHiBye中的变量
// 在外面是无法访问到sayHiBye中的变量的

function makeCounter () {
  let count = 0;
  return function () {
    return count++;
  };
}