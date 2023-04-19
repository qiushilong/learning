// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * Reading and Writing to a State Variable
 *
 * 更新一个状态变量你需要发送一个交易
 * 读取一个状态变量是免费的，不需要任何交易费用
 */

contract SimpleStorage {
    // State variable to store a number
    uint public num;

    // You need to send a transaction to write to a state variable
    function set(uint _num) public {
        num = _num;
    }

    // You can read from a state variable without sending a transaction
    function get() public view returns (uint) {
        return num;
    }
}
