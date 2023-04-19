// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * Solidity 支持枚举，它们对于建模选择和跟踪栈状态很有用。
 * 枚举可以在 contract 之外声明
 */

contract Enum {
    // 代表运输状态的枚举
    enum Status {
        Pending, // 0
        Shipped, // 1
        Accepted, // 2
        Rejected, // 3
        Canceled //4
    }

    // 默认值 : Pending
    Status public status;

    function get() public view returns (Status) {
        return status;
    }

    // 更新状态通过传入 uint 类型值
    function set(Status _status) public {
        status = _status;
    }

    function cancel() public {
        status = Status.Canceled;
    }

    // 删除将枚举重设为其第一个值 0
    function reset() public {
        delete status;
    }
}
