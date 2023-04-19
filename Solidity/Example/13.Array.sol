// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// 数组可以有一个编译时的大小，或者一个动态大小

contract Array {
    // 几种初始化数组的方式
    uint[] public arr;
    uint[] public arr2 = [1, 2, 3];
    // 固定数组大小，所有元素初始值为 0
    uint[10] public myFixedSizedArr;

    // Solidity 可以返回整个数组
    // 但是这个函数应该避免用于数组长度可以无需增长的
    function getArr() public view returns (uint[] memory) {
        return arr;
    }

    function push(uint i) public {
        // 添加到数组，数组长度加 1
        arr.push(i);
    }

    function pop() public {
        // 删除最后一个元素，数组长度减 1
        arr.pop();
    }

    function getLength() public view returns (uint) {
        return arr.length;
    }

    function remove(uint index) public {
        // delete 操作不会改变数组长度，delete 的元素会变成默认值，此例中为 0
        delete arr[index];
    }

    function examples() external {
        // 在内存中创建数组，只能创建定长数组
        uint[] memory a = new uint[](5);
    }

    // remove array element by shifting elements from right to left
    function remove2(uint _index) public {
        require(_index < arr.length, "index out of bound");

        for (uint i = _index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.pop();
    }

    // remove array element by copying last element into to the place to remove
    function remove3(uint index) public {
        // Move the last element into the place to delete
        arr[index] = arr[arr.length - 1];
        // Remove the last element
        arr.pop();
    }
}
