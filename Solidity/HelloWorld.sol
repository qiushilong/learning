// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract HelloWorld {
    string public name;

    constructor() {
        name = "web3";
    }

    // public 表示外界可以访问
    // view 
    // returns 声明返回值
    // memory 表示存储在内存中
    function sayName() public view returns (string memory) {
        return name;
    }

    function changeName(string memory newName ) public {
        name = newName;
    }
}