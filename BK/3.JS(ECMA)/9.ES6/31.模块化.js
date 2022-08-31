// 逐个暴露
export let school = 'sgg'

export function teach() {
    console.log("学习开发技术!");
}

//统一暴露
let student = 'qsl'

function learn() {
    console.log('学习新技术!');
}

export { student, learn }

// 默认暴露
export default {
    sc: 'sgg',
    cg: function () {
        console.log('改变你!');
    }
}
