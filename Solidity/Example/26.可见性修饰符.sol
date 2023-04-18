// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 可见性修饰符：
 * 函数和状态变量必须声明它们是否可以被其他合约访问。
 *
 * 函数可以被声明为：
 * - public：所有合约和账户都可以调用
 * - private：仅能在定义的合约内部调用
 * - internal：仅能在定义的合约和子合约中调用
 * - external：只能其他合约和账户调用
 *
 * 状态变量可以被声明为 public、private 和 internal，但不能是 external
 */

contract Base {
    // private 方法只能在该合约中调用
    function privateFunc() private pure returns (string memory) {
        return "private function called";
    }

    function testPrivateFunc() public pure returns (string memory) {
        return privateFunc();
    }

    // internal 方法可以在：1. 该合约调用  2. 子合约中调用
    function internalFunc() internal pure returns (string memory) {
        return "internal function called";
    }

    function testInternalFunc() public pure virtual returns (string memory) {
        return internalFunc();
    }

    // 在任何账户和合约中都可以调用
    function publicFunc() public pure returns (string memory) {
        return "public function called";
    }

    // external 方法可以在其他账户和其他合约中调用
    function externalFunc() external pure returns (string memory) {
        return "external function called";
    }

    string private privateStr = "my private variable";
    string internal internalStr = "my internal variable";
    string public publicStr = "my public variable";
}

contract Child is Base {
    // function testPrivateFunc() public pure returns (string memory) {
    // return privateFunc(); // Undeclared identifier.
    // }

    function testInternalFunc() public pure override returns (string memory) {
        return internalFunc();
    }
}
