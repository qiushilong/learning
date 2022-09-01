import '../css/a.css';

function add(a, b) {
	return a + b;
}

console.log(add(1, 2));
throw Error('xxx');

// 代码分割，懒加载
// import().then(res=>{})
