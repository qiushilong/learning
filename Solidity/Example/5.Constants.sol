// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * Constants
 * Constants are variables that cannot be modified.
 * Their value is hard coded and using constants can save gas cost.
 */

contract Constants {
    // coding convention to uppercase constant varivables
    address public constant MY_ADDRESS =
        0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc;
    uint public constant MY_UINT = 123;
}
