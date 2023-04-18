// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 变量被声明为 storage、memory、calldata，以明确指定数据的位置。
 * - storage: 变量是状态变量，存储在区块链上
 * - memory: 变量存储在内存中，并且它存在于一个被调用的函数中
 * - calldata: 包含函数参数的特殊数据位置
 */

contract DataLocations {
    uint[] public arr;
    mapping(uint => address) map;
    struct MyStruct {
        uint foo;
    }
    mapping(uint => MyStruct) myStructs;

    function f() public {
        // call _f with state variables
        _f(arr, map, myStructs[1]);

        // get a struct from a mapping
        MyStruct storage myStruct = myStructs[1];

        // create a struct in memory
        MyStruct memory myMemStruct = MyStruct(0);
    }

    function _f(uint[] storage _arr, mapping (uint => address) storage map, MyStruct storage _myStruct) internal {
        // do something with memory array
    }

    function h(uint[] calldata _arr) external {
        // do something with calldata array
    }
}