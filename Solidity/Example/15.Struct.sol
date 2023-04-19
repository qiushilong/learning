// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * 你可以通过创建一个结构来定义你自己的类型。
 * 它们对于将相关的数据组合在一起很有用。
 * 结构可以在合同之外声明，并在另一个合同中导入。
 */

contract Todos {
    struct Todo {
        string text;
        bool completed;
    }

    // An array of 'Todo' structs
    Todo[] public todos;

    function create(string calldata _text) public {
        // 初始化结构体的三种方式

        // 函数调用
        todos.push(Todo(_text, false));

        /*
        // 键值对
        todos.push(Todo({ text: _text, completed: false }));

        // 初始化一个空内容，再进行填充
        Todo memory todo;
        todo.text = _text;
        // todo.completed 初始化为 false

        todos.push(todo);
        */
    }

    // Solidity 自动化创建了一个 todos 的 getter，所以你实际不需要此函数
    function get(
        uint _index
    ) public view returns (string memory text, bool completed) {
        Todo storage todo = todos[_index];
        return (todo.text, todo.completed);
    }

    // update text
    function updateText(uint _index, string calldata _text) public {
        Todo storage todo = todos[_index];
        todo.text = _text;
    }

    // update completed
    function toggleCompleted(uint _index) public {
        Todo storage todo = todos[_index];
        todo.completed = !todo.completed;
    }
}
