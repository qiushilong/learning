// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// 下面是一个简单的合同，你可以在这个合同中获取、增加和减少 count 存储的信息

contract Counter {
    uint public count;

    function get() public view returns (uint) {
        return count;
    }

    function inc() public {
        count += 1;
    }

    function dec() public {
        // 这个函数将会失败当 count = 0
        count -= 1;
    }
}
