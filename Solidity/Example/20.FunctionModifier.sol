// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 函数修饰符：可以在函数调用之前或之后调用的代码。
 * 
 * 用处：
 * - 限制访问
 * - 验证输入
 * - 防范黑客重入攻击
 */

contract FunctionModifier {
    // 我们将使用这些变量来演示如何使用函数修饰符
    address public owner;
    uint public x = 10;
    bool public locked;

    constructor() {
        // 设置合约部署者作为合约的拥有者
        owner = msg.sender;
    }

    // 检查合约调用者是否是合约拥有者
    modifier onlyOwner {
        require(msg.sender == owner, "Not owner");
        // 下划线是一个特殊字符，只能在函数修饰符中使用。它告诉 Solidity 执行代码的剩余部分。
        _;
    }

    // 修饰符可以检查输入。该修饰符检查输入的地址是否是 0 地址
    modifier validAddress(address _addr) {
        require(_addr != address(0), "Not valid address");
        _;
    }

    function changeOwner(address _newOwner) public onlyOwner validAddress(_newOwner) {
        owner = _newOwner;
    }

    // 修饰符可以在函数调用之前或者之后被调用。
    // 这个修饰符可以防止一个函数在执行过程中被调用。
    modifier noReentrancy() {
        require(!locked, "No reentrancy");
        locked = true;
        _;
        locked = false;
    }

    function decrement(uint i) public noReentrancy {
        x -= i;

        if(i > 1) {
            decrement(i - 1);
        }
    }
}