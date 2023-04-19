// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * Mapping
 * 
 * Maps结构 使用语法 mapping(keyType => valueType)
 * keyType 可以是任何内建值类型、bytes、string 或者 任何合约
 * valueType 可以任何类型，包括另一个 maps 或者 araay
 * 
 * Mappings 是不可迭代的。
 */

contract Mapping {
    // 映射 address -> uint
    mapping(address => uint) public myMap;

    function get(address _addr) public view returns (uint) {
        // 映射总是返回一个值
        // 如果该值从未被设置过，它将返回默认值
        return myMap[_addr];
    }

    function set(address _addr, uint _i) public {
        // Update the value at this address
        myMap[_addr] = _i;
    }

    function remove(address _addr) public {
        // Reset the value to the default value.
        delete myMap[_addr];
    }
}

contract NestedMapping {
    // Nested mapping(mapping from address to another mapping)
    mapping(address => mapping(uint => bool)) public nested;

    function get(address _addr1, uint _i) public view returns (bool) {
        // 你可以从一个嵌套的映射中获取值
        // 即使它没有被初始化
        return nested[_addr1][_i];
    }

    function set(address _addr1, uint _i, bool _boo) public {
        nested[_addr1][_i] = _boo;
    }

    function remove(address _addr1, uint _i) public {
        delete nested[_addr1][_i];
    }
}