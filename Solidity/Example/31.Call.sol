// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * call 是一个低层次的功能，用于与其他合约交互。
 * 当你只是通过调用 fallback 函数来发送 ether 时，推荐使用这个方法。
 * 
 * 然而，这并不是调用现有函数的推荐方法。
 * 
 * 不推荐低层次的调用的原因：
 * - 反转不支持冒泡
 * - 绕过了类型检查
 * - 省略了函数存在性检查
 */


contract Receiver {
    event Received(address caller, uint amount, string message);

    fallback() external payable {
        emit Received(msg.sender, msg.value, "Fallback was called");
    }

    function foo(string memory _message, uint _x) public payable returns (uint) {
        emit Received(msg.sender, msg.value, _message);
        return _x + 1;
    }
}

contract Caller {
    event Response(bool success, bytes data);

    // 合同调用者不必知道接收者的源代码，知道接收者合约的调用函数和参数即可
    function testCallFoo(address payable _addr) public payable {
        (bool success, bytes memory data) = _addr.call{value: msg.value, gas: 5000}(
            abi.encodeWithSignature("foo(string, uint256)", "call foo", 123)
        );
        emit Response(success, data);
    }

    // 调用一个不存在的方法也会触发 Fallback 函数
    function testCallDoesNotExist(address payable _addr) public payable {
        (bool success, bytes memory data) = _addr.call{value: msg.value}(
            abi.encodeWithSignature("doesNotExist()")
        );

        emit Response(success, data);
    }
}