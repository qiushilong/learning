// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 你可以通过声明接口来和其他合约交互
 * 
 * 接口：
 * 1. 不能包含任何函数实现
 * 2. 可以从其他接口继承
 * 3. 所有函数都要使用 external 声明
 * 4. 不能声明构造器
 * 5. 不能声明状态变量
 */

contract Counter {
    uint public count;

    function increment() external {
        count += 1;
    }
}

interface ICounter {
    function count() external view returns (uint);

    function increment() external;
}

contract MyContract {
    function increamentCounter(address _counter) external {
        ICounter(_counter).increment();
    }

    function getCount(address _counter) external view returns(uint) {
        return ICounter(_counter).count();
    }
}

