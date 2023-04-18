// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 继承状态变量：
 * 与函数不同，状态变量不能通过在子合同中重新声明而被重写。
 * 下面是如何正确的覆盖继承的状态变量。
 */

contract A {
    string public name = "Contract A";

    function getName() public view returns (string memory) {
        return name;
    }
}

// solidity 0.6 中不允许映射
// 这会导致编译错误
// contract B is A {
//     string public name = "Contract B";
// }

contract C is A {
    // 这是正确的方式去覆盖继承的变量值
    constructor() {
        name = "Contract C";
    }
}
