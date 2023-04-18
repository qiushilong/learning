// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * constructor 是一个可选的函数，在合约创建时调用。
 * 下面是如何向构造函数创建参数的例子。
 */

contract X {
    string public name;

    // string 属于引用类型
    constructor(string memory _name) {
        name = _name;
    }
}

contract Y {
    string public text;

    constructor(string memory _text) {
        text = _text;
    }
}

// 有两种方法可以用来初始化父级 contract

// 1. 通过在继承列表上传入参数
contract B is X("Input to X"), Y("Input to Y") {

}

contract C is X, Y {
    // 通过在 constructor 上传入参数，类似函数修饰符
    constructor(string memory _name, string memory _text) X(_name) Y(_text) {}
}

// 父构造函数总数按照继承的顺序被调用（无论子 contract 的构造函数如何列父 contract 和顺序）

// 调用顺序 X Y D
contract D is X, Y {
    constructor() X("X was called") Y("Y was called") {}
}

// 调用顺序 X Y E
contract E is X, Y {
    constructor() Y("Y was called") X("X was called") {}
}
