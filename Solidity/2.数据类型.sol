// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.4.0;

/**
 * Solidity 是一种静态类型语言
 * 这意味着每个变量（状态变量和局部变量）都需要在编译时指定变量类型
 * 或者至少可以推断出变量类型
 */

contract Demo2 {
    /* 值类型 */

    bool flag; // 布尔类型

    int a = -1; // 有符号整型
    uint b = 1; // 无符号整形（不能小于 0）
    // int 等于 int256; uint 等于 uint256
    // 还有 int8... uint8...（以 8 为步长递增到 256）

    fixed c = -0.2; // 有符号浮点型
    ufixed d = 0.2; // 无符号浮点型（不能小于 0）
    // fixedMxN M表示占用位数，N表示占用小数位数
    // M必须能整除 8 && 8<= M<= 256，N可以是 0-80之间的任意整数
    fixed16x2 e = 1.2;

    address addr = 0x3C4856C65AEfc47b1d22A21d6D8C0DD6C3AeA1eB; // 地址类型
    uint256 balance = addr.balance; // 该地址余额
    address myAddr = this; //

    function t() {
        if (myAddr.balance >= 10) addr.transfer(10); // 转账方法 myAddr 到 addr
        /**
         * 如果 addr 是一个合约地址，它的代码（跟具体来说是它的 fallback 函数，如果有的话）会跟 transfer 函数
         * 一起执行（这是 EVM 的一个特性，无法阻止）。如果执行过程中用光了 gas 或者因为任何原因执行失败，以太币会被打回，
         * 当前的合约也会在终止的同时抛出异常。
         */
    }

    /**
     * addr.send()
     * send 是 transfer 的低级版本。如果执行失败，当前的合约不会因为异常而终止，但 send 会返回 false。
     * 
     * 警告：
     * 在使用 send 的时候会有些风险：如果调用栈深度是 1024 会导致发送失败（这总是可以被调用者强制），
     * 如果接收者用光了 gas 也会导致发送失败。所以为了保证以太币发送的安全，一定要检查 send 的返回值，
     * 使用 transfer 或者更好的办法：使用一种接收者可以取回资金的模式。
     */

    // addr.call() boolean
    address nameReg = 0x72ba7d8e73fe8eb666ea66babc8116a41bfb10e2;
    // nameReg.call("register", "MyName");
    // namReg.call.gas(1000000)("register", "MyName"); // 使用修饰符

    // 定长字节数组
    bytes1 b1 = 0xb5;
}
