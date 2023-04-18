// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 事件：允许记录到Ethereum区块链。
 * 应用场景：
 * 1. 聆听事件并更新用户界面
 * 2. 一种廉价的存储形式
 */

contract Event {
    /**
     * 事件声明
     * 最多可以对 3 个参数进行索引。
     * indexed 参数帮助你通过索引参数过滤日志。
     */
    event Log(address indexed sender, string message);
    event AnotherLog();

    function test() public {
        emit Log(msg.sender, "Hello World!");
        emit Log(msg.sender, "Hello EVM!");
        emit AnotherLog();
    }
}
