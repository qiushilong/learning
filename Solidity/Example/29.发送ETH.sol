// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 发送 ETH（transfer、send、call）
 *
 * 1. 怎样发送 Ether？
 * 你可以发送 Ether 到另一个合约通过：
 * - transfer（2300 gas，抛出错误）
 * - send（2300 gas，返回 bool 值）
 * - call（所有 gas 或者 设置的 gas，返回 bool 值）
 *
 * 2. 怎样接收 Ether？
 * 一个合约要接收 Ether 至少要有以下方法之一：
 * - receive() external payable
 * - fallback() external payable
 * 当 msg.data 为空，调用 receive()；否则，调用 fallback()
 *
 * 3. 你应该使用哪个方法？
 * 推荐使用 call 和 防重入的方法结合
 * 防止重入通过：
 * - 在调用其他合约之前，进行所有的状态改变
 * - 使用防重入修饰符
 */

contract ReciverEther {
    /*
    哪一个方法会被调用, fallback() or receive()?

            send Ether
                |
            msg.data is empty?
                / \
                yes  no
                /     \
    receive() exists?  fallback()
            /   \
            yes   no
            /      \
        receive()   fallback()
    */

    // 接收 Ether 方法。msg.data 必须为空
    receive() external payable {}

    // 接收 Ether 方法。msg.data 不为空，或者为空时不存在 receive() 方法
    fallback() external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendEther {
    function sendViaTransfer(address payable _to) public payable {
        // 这个方法不再被推荐
        _to.transfer(msg.value);
    }

    function sendViaSend(address payable _to) public payable {
        // 函数返回一个 bool 值，标识成功或失败
        // 这个方法不再推荐
        bool sent = _to.send(msg.value);
        require(sent, "Failed to send Ether");
    }

    function sendViaCall(address payable _to) public payable {
        // 函数返回一个 bool 值，标识成功或失败
        // 这是目前推荐的方法
        (bool sent, bytes memory data) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}
