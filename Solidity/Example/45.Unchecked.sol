// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * Solidity 0.8 中数字的溢出和下溢会产生错误。
 * 
 * 这可以通过使用 unchecked 禁止。
 * 
 * 禁止溢出/下溢检查可以节省 gas。
 */

contract UncheckedMath {
    function add(uint x, uint y) external pure returns (uint) {
        // 22291 gas
        // return x + y;

        // 22103 gas
        unchecked {
            return x + y;
        }
    }

    function sub(uint x, uint y) external pure returns (uint) {
        // 22329 gas
        // return x - y;

        // 22147 gas
        unchecked {
            return x - y;
        }
    }

    function sumOfCubes(uint x, uint y) external pure returns (uint) {
        // Wrap complex math logic inside unchecked
        unchecked {
            uint x3 = x * x * x;
            uint y3 = y * y * y;

            return x3 + y3;
        }
    }
}