// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * Solidity 支持多重继承。合约可以通过使用 is 关键字来继承其他合约。
 * 
 * 将被子合同重新的方法必须声明为 "virtual"
 * 要覆盖一个父合同的方法必须使用关键字 "override"
 * 
 * 继承的顺序很重要。
 * 你必须按照最基本到最衍生排序
 */

/* 
继承关系图
    A
   / \
  B   C
 / \ /
F  D,E
*/

contract A {
    function foo() public pure virtual returns (string memory) {
        return "A";
    }
}

contract B is A {
    // 重写 A.foo
    function foo() public pure virtual override returns (string memory) {
        return "B";
    }
}

contract C is A {
    // 重写 A.foo
    function foo() public pure virtual override returns (string memory) {
        return "C";
    }
}

/**
 * 合同可以从多个父合同中继承。
 * 当一个函数被调用时，函数会在自身 -> 从右到左的父合同中，以深度优先的方式查找。 
 */ 
contract D is B, C {
    function foo() public pure override(C, B) returns (string memory) {
        return super.foo(); // 返回 C
    }
}

/**
 * 继承必须从最基本到最衍生排序（A 是 B 的父级）
 * 调换 A B 的顺序会产生一个编译错误
 */
contract F is A, B {
    function foo() public pure override(A, B) returns (string memory) {
        return super.foo();
    }
}