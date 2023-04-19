// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 当一个函数被调用时，calldata的前4个字节指定要调用哪个函数。
 * 这4个字节被称为函数选择器。
 * 以下面这段代码为例。它使用调用来执行地址为addr的合同上的转移
 *
 * addr.call(abi.encodeWithSignature("transfer(address,uint256)", 0xSomeAddress, 123))
 * 从abi.encodeWithSignature(....)返回的前4个字节是函数选择器。
 *
 * 如果你在代码中预先计算并内联函数选择器，也许你可以节省少量的气体？
 * 以下是函数选择器的计算方法。
 */

contract FunctionSelector {
    /*
    "transfer(address,uint256)"
    0xa9059cbb
    "transferFrom(address,address,uint256)"
    0x23b872dd
    */
    function getSelector(string calldata _func) external pure returns (bytes4) {
        return bytes4(keccak256(bytes(_func)));
    }
}
