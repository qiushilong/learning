import React, { useState } from 'react';

export interface ITodo {
    id: number;
    text: string;
    done: boolean;
}

export interface ITodoProps {
    todoList: ITodo[];
    addItem: (text: string) => void;
    deleteItem: (id: number) => void;
    checkItem: (id: number, isCheck: boolean) => void;
}

export default function Todo(props: ITodoProps) {
    const [text, setText] = useState('')
    const { todoList, addItem, deleteItem, checkItem } = props;

    // function handleKeyDown(e: HTMLInputElement) {
    //     console.log(e.keyCode === 13) {

    //     }
    // }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.code === 'Enter') {
            addItem(text);
            setText('');
        }
    }

    return <section>
        <ul data-testid="todo-list" data-length={todoList.length}>
            {
                todoList.map(todo =>
                    <li key={todo.id}>
                        <input type='checkbox' onChange={e => checkItem(todo.id, e.target.checked)}></input>
                        <span style={todo.done ? { textDecoration: 'line-through' } : {}}>{todo.text}</span>
                        <span style={{ color: 'red' }} onClick={() => deleteItem(todo.id)}>删除</span>
                    </li>)
            }
        </ul>

        <input type="text" placeholder='what is your plan' value={text} onChange={e => setText(e.target.value)} onKeyDown={handleKeyDown} />
        <button onClick={() => { addItem(text); setText(''); }}>新增</button>
    </section>
}