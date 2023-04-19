// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// Immutable 变量类似常量。immutable 变量的值可以在 constructor 中设置，但之后不能更改

contract Immutable {
    // coding convention to uppercase constant variables;
    address public immutable MY_ADDRESS;
    uint public immutable MY_UINT;

    constructor(uint _myUint) {
        MY_ADDRESS = msg.sender;
        MY_UINT = _myUint;
    }
}