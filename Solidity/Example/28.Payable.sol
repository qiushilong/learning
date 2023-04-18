// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 函数或地址声明为 payable 可以接收 eth 到合约账户。
 */

contract Payable {
    // payable 地址可以接收 eth
    address payable public owner;

    // payable 构造函数可以接收 eth
    constructor() payable {
        owner = payable(msg.sender);
    }

    /**
     * 将 eth 存入此合约的函数。
     * 调用这个函数，并携带一些 eth，该合约的余额会自动更新。
     */
    function deposit() public payable {}

    /**
     * 调用这个函数，并携带一些 eth，该函数会抛出一个错误“this function is not payable”
     */
    function notPayable() public {}

    // 将合约中的所有 eth 提出
    function withdraw() public {
        // 获取余额
        uint amount = address(this).balance;

        // 将所有 eth 发送给 owner
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Fail to send Ether");
    }

    // 转移 eth 到指定账户
    function transfer(address payable _to, uint _amount) public {
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Fail to send Ether");
    }
}
