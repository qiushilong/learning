// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * Fallback
 *
 * fallback 是一个特殊的函数，他被执行，当：
 * - 一个不存在的函数被调用
 * - Ether 直接发送到一个合约，但是 receive() 不存在或者 msg.data 不是空
 */

contract Fallback {
    event Log(string func, uint gas);

    // Fallback 函数必须使用 external 声明
    fallback() external payable {
        // send / transfer （2300 gas）
        // call（所有 gas）
        emit Log("fallback", gasleft());
    }

    // receive 是 fallback 的一种变体，当 msg.data 为空
    receive() external payable {
        emit Log("receive", gasleft());
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendToFallback {
    function transferToFallback(address payable _to) public payable {
        _to.transfer(msg.value);
    }

    function callFallback(address payable _to) public payable {
        (bool sent, ) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}

/**
 * Fallback 可选择性的接收字节作为输入和输出
 */

contract FallbackInputOutput {
    address immutable target;

    constructor(address _target) {
        target = _target;
    }

    fallback(bytes calldata data) external payable returns (bytes memory) {
        (bool ok, bytes memory res) = target.call{value: msg.value}(data);
        require(ok, "call failed");
        return res;
    }
}

contract Counter {
    uint public count;

    function get() external view returns (uint) {
        return count;
    }

    function inc() external returns (uint) {
        count += 1;
        return count;
    }
}

contract TestFallbackInputOutput {
    event Log(bytes res);

    function test(address _fallback, bytes calldata data) external {
        (bool ok, bytes memory res) = _fallback.call(data);
        require(ok, "call failed");
        emit Log(res);
    }

    function getTestData() external pure returns (bytes memory, bytes memory) {
        return (
            abi.encodeCall(Counter.get, ()),
            abi.encodeCall(Counter.inc, ())
        );
    }
}
