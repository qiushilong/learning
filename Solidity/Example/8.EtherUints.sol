// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * Ether and Wei
 * 
 * Transactions are paid with ether.
 * 
 * Similar to how one dollar is equire to 100 cent, one ether is to 10**18 wei.
 */

contract EtherUints {
    uint public oneWei = 1 wei;
    // 1 wei is equal to 1
    bool public isOneWei = 1 wei == 1; // true

    uint public oneEther = 1 ether;
    // 1 ether is equal to 10**18 wei
    bool public isOneEther = 1 ether == 1e18; // true
}