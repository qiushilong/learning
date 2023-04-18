// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 一个错误将撤销在交易期间对状态所作的所有改变。
 * 你可以抛出一个错误通过调用 require、revert 或 assert。
 *
 * - require：在执行前验证输入和条件的。
 * - revert：和 require 类型，详细内容如下。
 * - assert：用来检查那些不应该是假的代码。断言失败以为着一个错误。
 *
 * 使用自定义错误以节省 gas。
 */

contract Error {
    function testRequire(uint _i) public pure {
        // Require 应该用来验证以下条件
        require(_i > 10, "Input must be greater than 10");
    }

    function testRevert(uint _i) public pure {
        // 在检查条件复杂时，Revert 很有用（以下代码和上面的作用一样）
        if (_i <= 10) {
            revert("Input must be greater than 10");
        }
    }

    uint public num;

    function testAssert() public view {
        // assert 应该只用于测试内部错误，和检查不变量
        // 这里我们断言 num 总是等于 0，因为不可能更新 num 的值
        assert(num == 0);
    }

    // 自定义错误
    error InsufficientBalance(uint balance, uint withdrawAmount);

    function testCustomError(uint _withdrawAmount) public view {
        uint bal = address(this).balance;
        if (bal < _withdrawAmount) {
            revert InsufficientBalance({
                balance: bal,
                withdrawAmount: _withdrawAmount
            });
        }
    }
}

// 多一个例子
contract Account {
    uint public balance;
    uint public constant MAX_UINT = 2 ** 256 - 1;

    function deposit(uint _amount) public {
        uint oldBalance = balance;
        uint newBalance = balance + _amount;

        // 如果 newBalance 小于 oldBalance，说明发生了溢出
        require(newBalance >= oldBalance, "Overflow");

        balance = newBalance;

        assert(balance >= oldBalance);
    }

    function withdraw(uint _amount) public {
        uint oldBalance = balance;

        // 余额需要大于提款金额
        require(balance >= _amount, "Underflow");

        if (balance < _amount) {
            revert("Underflow");
        }

        balance -= _amount;

        assert(balance <= oldBalance);
    }
}
