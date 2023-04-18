// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 有很多方法可以从函数中返回输出
 * 公共函数不能接收某些数据类型作为输入和输出
 *
 * map 结构不能作为函数的输入和输出
 */

contract Function {
    // 函数可以返回多个值
    function returnMany() public pure returns (uint, bool, uint) {
        return (1, true, 2);
    }

    // 返回值可以被命名
    function named() public pure returns (uint x, bool b, uint y) {
        return (1, true, 2);
    }

    // 返回值可以分配给它们的名字
    // 这种情况下，可以省略 return 语句
    function assigned() public pure returns (uint x, bool b, uint y) {
        x = 1;
        b = true;
        y = 2;
    }

    // 在调用另一个返回多个值的函数时，使用解构赋值
    function destructuringAssignments()
        public
        pure
        returns (uint, bool, uint, uint, uint)
    {
        (uint i, bool b, uint j) = returnMany();

        // 值可以不写
        (uint x, , uint y) = (4, 5, 6);

        return (i, b, j, x, y);
    }

    // 可以使用数组作为输入
    function arrayInput(uint[] memory _arr) public {}

    // 可以使用数组作为输出
    uint[] public arr;

    function arrayOutput() public view returns (uint[] memory) {
        return arr;
    }
}

// 使用键值对形式调用函数
contract XYZ {
    function someFuncWithManyInputs(
        uint x,
        uint y,
        uint z,
        address a,
        bool b,
        string memory c
    ) public pure returns (uint) {}

    function callFunc() external pure returns (uint) {
        return someFuncWithManyInputs(1, 2, 3, address(0), true, "c");
    }

    function callFuncWithKeyValue() external pure returns (uint) {
        return
            someFuncWithManyInputs({
                a: address(0),
                b: true,
                c: "c",
                x: 1,
                y: 2,
                z: 3
            });
    }
}
