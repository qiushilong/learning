// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 在 Solidity 中存在 3 中变量
 *
 * 1. local 变量
 *   1.1 在函数中声明
 *   1.2 不存储在区块链中
 * 2. state 变量
 *   2.1 在函数外声明
 *   2.2 存储在区块链中
 * 3. global 变量（提供区块链的信息）
 */

contract Variables {
    // 状态变量被存储在区块链中
    string public text = "Hello";
    uint public num = 123;

    function doSomething() public view {
        // 本地变量不会存储在区块链中
        uint i = 456;

        // 这是一些全局变量
        uint timestamp = block.timestamp; // Current block timestamp
        address sender = msg.sender; // address of the caller
    }
}
