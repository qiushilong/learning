/*
    在JavaScript中,一个函数可以作为另一个函数的参数
    Node.js类似js
*/
function say(word) {
    console.log(word);
}

function execute(func, val) {
    func(val);
}

execute(say, 'hello');//这里传的是say本身