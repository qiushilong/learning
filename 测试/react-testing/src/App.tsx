import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'
import type { ITodo } from './components/Todo'

function App() {
  // Input
  const [fullname, setFullName] = useState('')

  // Todo
  const [todoList, setTodoList] = useState<ITodo[]>([
    {
      id: 1,
      text: 'Learn about React',
      done: false
    },
    {
      id: 2,
      text: 'Meet friend for lunch',
      done: false
    },
    {
      id: 3,
      text: 'Build really cool todo app',
      done: false
    }
  ])

  function addItem(text: string) {
    setTodoList([...todoList, { id: Date.now(), text, done: false }])

  }

  function deleteItem(id: number) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  function checkItem(id: number, isCheck: boolean) {
    console.log(isCheck)
    const newTodoList = [...todoList]
    const item = newTodoList.find(todo => todo.id === id)
    if (item) {
      item.done = isCheck;
      setTodoList(newTodoList)
    }
  }


  return (
    <div className="App">

      <h1>Input</h1>
      <input type='text' placeholder='Type your name' value={fullname} onChange={e => setFullName(e.target.value)} />
      <p>my name is <span>{fullname}</span></p>

      <h1>Todo</h1>
      <Todo {...{ todoList, addItem, deleteItem, checkItem }}></Todo>
    </div>
  );
}

export default App;
