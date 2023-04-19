// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * Gas
 *
 * 你需要为交易支付多少 ether？
 *
 * 你需要支付 gas消耗量 * gas价格 数量的 ether
 * - gas 是一个计算的 uint
 * - 消耗的 gas 是交易中使用的 gas 总量
 * - 气体价格是指你愿意为每个 gas 支付多少 ether
 *
 * 有更高 gas 价格的交易会优先添加入区块
 * 未花费的 gas 将被退还
 *
 *
 * Gas Limit
 *
 * 你可以花费的 gas 值有两个上限
 * - gas limit（你愿意为交易花费的最大 gas 值，由你设置）
 * - block gas limit（一个区块中允许的最大 gas 值，由网络设置）
 */

contract Gas {
    uint public i = 0;

    // 用尽你发送的所有 gas 会导致交易失败
    // 状态改变将撤销
    // gas 消耗不会退回
    function forever() public {
        // 这里我们允许一个死循环知道所有的 gas 被消耗，导致交易失败
        while (true) {
            i += 1;
        }
    }
}
