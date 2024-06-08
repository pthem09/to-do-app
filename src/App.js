import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

import ToDoForm from './Components/ToDoForm/ToDoForm';
import ToDoList from './Components/ToDoList/ToDoList';

export default function App() {
  
  let [toDoItems, setToDoItems] = useState([
    {
      id: nanoid(),
      item: "name of item",
    },
    {
      id: nanoid(),
      item: "second item",
    }
  ]);

  return (
    <div className="App">
      <header>
        <h1>Manage your tasks</h1>
      </header>
      <main>
        <ToDoForm />
        <ToDoList />
      </main>
    </div>
  );
}