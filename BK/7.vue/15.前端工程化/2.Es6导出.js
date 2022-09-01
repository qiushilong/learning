let a = 10
let b = 20
let c = 30

function show() {
    console.log('1111');
}

//默认导出
export default {
    a,
    c,
    show
}
// 每个文件只能有一个export default,否则会报错

//按需导出
export let s1 = 'aaa'
export let s2 = 'ccc'
export function say() {
    console.log('000');
}
//按需导出可以使用多次