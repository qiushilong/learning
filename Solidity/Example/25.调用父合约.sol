// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 调用父合约：
 * 父合约可以被直接调用，也可以通过使用关键字 super 来调用。
 * 通过使用关键字 super，所有直接的父合同都将被调用。
 */

/* 
继承结构
  A
 /  \
B   C
 \ /
  D
*/

contract A {
    // 这是一个事件，从你的函数中发出，并将它们记录到事务日志中。在这个例子中非常有用。
    event Log(string message);

    function foo() public virtual {
        emit Log("A.foo called");
    }

    function bar() public virtual {
        emit Log("A.bar called");
    }
}

contract B is A {
    function foo() public virtual override {
        emit Log("B.foo called");
        A.foo();
    }

    function bar() public virtual override {
        emit Log("B.bar called");
        super.bar();
    }
}

contract C is A {
    function foo() public virtual override {
        emit Log("C.foo called");
        A.foo();
    }

    function bar() public virtual override {
        emit Log("C.bar called");
    }
}

contract D is B, C {
    function foo() public override(B, C) {
        super.foo();
    }

    function bar() public override(B, C) {
        super.bar();
    }
}
