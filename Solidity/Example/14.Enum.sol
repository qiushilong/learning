// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * Solidity supports enumerables and they are useful to model choice and keep track of state.
 * Enums can be declared outside of a contract
 */

contract Enum {
    // Enum representing shipping status
    enum Status {
        Pending, // 0
        Shipped, // 1
        Accepted, // 2
        Rejected, // 3
        Canceled //4
    }

    // Defalut value : Pending
    Status public status;

    function get() public view returns (Status) {
        return status;
    }

    // Update status by passing uint into input
    function set(Status _status) public {
        status = _status;
    }

    function cancel() public {
        status = Status.Canceled;
    }

    // delete resets the enum to its first value 0
    function reset() public {
        delete status;
    }
}
