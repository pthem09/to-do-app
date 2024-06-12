import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

import ToDoForm from './Components/ToDoForm/ToDoForm';
import ToDoList from './Components/ToDoList/ToDoList';

export default function App() {
  
  let [toDoItems, setToDoItems] = useState([
    {}
  ]);


  function addItem(date, link, description, priority) {
    setToDoItems((oldItems) => [
      ...oldItems,
      {
        id: nanoid,
        date,
        description,
        link,
        priority
      }
    ]);
  }

  return (
    <div className="App">
      <header>
        <h1>Manage your tasks</h1>
      </header>
      <main>
        <ToDoForm addItem={addItem}/>
        <ToDoList toDoItems={toDoItems}/>
      </main>
    </div>
  );
}