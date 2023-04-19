// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 这里我们将介绍几种 Solidity 中可用的原始数据类型
 *
 * 1. boolean
 * 2. uint256
 * 3. int256
 * 4. address
 * 
 * string 属于引用类型
 */

contract Primitives {
    bool public boo = true;

    /**
     * uint 代表无符号整数，意味着没有负数
     * different sizes are available
     *   uint8    ranges from 0 to 2 ** 8 - 1
     *   uint16    ranges from 0 to 2 ** 16 - 1
     *   ...        ......
     *   uint256    ranges from 0 to 2 ** 256 - 1
     */
    uint8 public u8 = 1;
    uint public u256 = 456;
    uint public u = 123; // uint 等价于 uint256

    /**
     * int 类型表示整数，允许负数
     * Like uint, different ranges are available from int8 to int 256
     *   int 256 ranges from -2 ** 255 to 2 ** 255 -1
     *   int 128 ranges from -2 ** 127 to 2 ** 127 -1
     */
    int8 public i8 = -1;
    int public i256 = 456;
    int public i = -123; // int is same as int256

    // minimum and maximum of int
    int public minInt = type(int).min;
    int public maxInt = type(int).max;

    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    /**
     * 在 Solidity 中，数据类型 byte 代表一个字节的序列。
     * 目前有两种类型：
     *
     *   - 定长字节数组
     *   - 动态字节数组
     *
     * 词条 bytes 在 Solidity 中代表一个动态字节数组。
     * 是 byte[] 的简写
     */
    bytes1 a = 0xb5; //  [10110101]
    bytes1 b = 0x56; //  [01010110]

    // Default values
    // 未分配的变量都有一个默认值
    bool public defaultBoo; // false
    uint public defaultUint; // 0
    int public defaultInt; // 0
    address public defaultAddr; // 0x0000000000000000000000000000000000000000
}
