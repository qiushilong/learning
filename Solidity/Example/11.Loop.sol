
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * For and While Loop
 * 
 * Solidity supports for, while, and do while loops.
 * 
 * 
 * 不要写无边界的循环，因为这可能会触及气体极限，导致交易失败
 * 因为这个原因，while 和 do while 基本上不使用
 */

contract Loop {
    function loop() public {
        // for loop
        for(uint i = 0; i < 10; i++) {
            if(i == 3) {
                // Skip to next iteration with continue 
                continue;
            }
            if(i == 5) {
                // Exit loop with break
                break;
            }
        }

        // while loop
        uint j;
        while(j < 10) {
            j++;
        }
    }
}