// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.4.0;

/**
 * Solidity 是一种静态类型语言
 * 这意味着每个变量（状态变量和局部变量）都需要在编译时指定变量类型
 * 或者至少可以推断出变量类型
 */

contract Demo2 {
    /* 值类型 */

    bool flag; // 布尔类型

    int a = -1; // 有符号整型
    uint b = 1; // 无符号整形（不能小于 0）
    // int 等于 int256; uint 等于 uint256
    // 还有 int8... uint8...（以 8 为步长递增到 256）

    fixed c = -0.2; // 有符号浮点型
    ufixed d = 0.2; // 无符号浮点型（不能小于 0）
    // fixedMxN M表示占用位数，N表示占用小数位数
    // M必须能整除 8 && 8<= M<= 256，N可以是 0-80之间的任意整数
    fixed16x2 e = 1.2;

    address addr = 0x3C4856C65AEfc47b1d22A21d6D8C0DD6C3AeA1eB; // 地址类型
    uint256 balance = addr.balance; // 该地址余额
    

    // balance f = 1;
}
