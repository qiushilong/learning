// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * Ether 和 Wei
 * 
 * 交易会使用 ether 支付
 * 
 * 1 ether = 10**18 wei
 */

contract EtherUints {
    uint public oneWei = 1 wei;
    // 1 wei 等价于 1
    bool public isOneWei = 1 wei == 1; // true

    uint public oneEther = 1 ether;
    // 1 ether is 等价于 10**18 wei
    bool public isOneEther = 1 ether == 1e18; // true
}