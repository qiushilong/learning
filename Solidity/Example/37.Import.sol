// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// import Foo.sol from current directory
import "./37.Export.sol";

// import {symbol1 as alias, symbol2} from "filename";
import {Unauthorized, add as func, Point} from "./37.Export.sol";

contract Import {
    // Initialize Foo.sol
    Foo public foo = new Foo();

    // Test Foo.sol by getting it's name.
    function getFooName() public view returns (string memory) {
        return foo.name();
    }
}

// 你也可以从GitHub上导入，只需复制URL即可。
// import "https://github.com/owner/repo/blob/branch/path/to/Contract.sol";
