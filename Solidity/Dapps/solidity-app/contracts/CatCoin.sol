// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

// 使用 openzeppelin 库中实现的 ERC20 规范代币
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CatCoin is ERC20 {
    constructor() ERC20("CatCoin", "CTB") {
        _mint(msg.sender, 10000 * 10 ** 18);
    }
}
