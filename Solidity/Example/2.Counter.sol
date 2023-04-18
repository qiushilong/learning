// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// Here is a simple contract that you can get, increment and decrement the count store in this constract

contract Counter {
    uint public count;

    // Function to get the current count
    function get() public view returns (uint) {
        return count;
    }

    // Function to increment count by 1
    function inc() public {
        count += 1;
    }

    // Function to decrement count by 1
    function dec() public {
        // This function will fail if count = 0
        count -= 1;
    }
}
