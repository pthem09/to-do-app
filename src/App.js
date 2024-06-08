import { useState } from 'react';
import './App.css';

import ToDoForm from './Components/ToDoForm/ToDoForm';
import ToDoList from './Components/ToDoList/ToDoList';

export default function App() {
  
  let [toDoItems, setToDoItems] = useState([
    {item: "name of item"},
    {item: "second item"}
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