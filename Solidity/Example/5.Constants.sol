// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 常量：不能修改的变量
 * 常量的值是硬编码的，使用常量可以节省 gas
 */

contract Constants {
    // 编码惯例为大写的常量变量
    address public constant MY_ADDRESS =
        0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc;
    uint public constant MY_UINT = 123;
}
