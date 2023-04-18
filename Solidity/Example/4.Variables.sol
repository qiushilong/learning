// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * There are 3 types of variables in Solidity
 *
 * 1. local
 *   1.1 declared inside a function
 *   1.2 not stored on the blockchain
 * 2. state
 *   2.1 declared outside a function
 *   2.2 stored on the blockchain
 * 3. global(provides information about the blockchain)
 */

contract Variables {
    // State variables are stored on the blockchain
    string public text = "Hello";
    uint public num = 123;

    function doSomething() public view {
        // Local variables are not saved to the blockchain
        uint i = 456;

        // Here are some global variables
        uint timestamp = block.timestamp; // Current block timestamp
        address sender = msg.sender; // address of the caller
    }
}
