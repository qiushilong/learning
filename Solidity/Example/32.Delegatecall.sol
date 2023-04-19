// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * Delegatecall:
 * 
 * delegatecall 是一个更底层的函数，类似 call
 * 
 * 当 合约A 执行 delegatecall 调用 合约B 的代码，会携带 合约A 的 msg.sender, msg.value
 */

// NOTE：先部署该合约
contract B {
    uint public num;
    address public sender;
    uint public value;

    function setVars(uint _num) public payable {
        num = _num;
        sender = msg.sender;
        value = msg.value;
    }
}

contract A {
    uint public num;
    address public sender;
    uint public value;

    function setVars(address _contract, uint _num) public payable {
        (bool success, bytes memory data) = _contract.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
    }
}