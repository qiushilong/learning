// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * getter 函数可以被 view 和 pure 修饰
 * view：修饰没有状态改变的函数
 * pure：修饰没有任何状态变量被读取或改变
 */

contract ViewAndPure {
    uint public x = 1;

    // 承诺不修改状态
    function addToX(uint y) public view returns (uint) {
        return x + y;
    }

    // 承诺不读取也不修改状态
    function add(uint i, uint j) public pure returns (uint) {
        return i + j;
    }
}