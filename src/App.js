import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

import ToDoForm from './Components/ToDoForm/ToDoForm';
import ToDoList from './Components/ToDoList/ToDoList';
import Timer from './Components/Timer/Timer';

export default function App() {
  let [toDoItems, setToDoItems] = useState([getInitialState]);

  useEffect(saveToDoItems, [toDoItems]);

  function saveToDoItems() {
    localStorage.setItem('items', JSON.stringify(toDoItems));
  }
  
  function getInitialState() {
    let savedState = localStorage.getItem('items');
    if (typeof savedState === 'string') {
      return JSON.parse(savedState);
    }
    return [];
  }

  function addItem(date, link, description, priority) {
    setToDoItems((oldItems) => [
        {
        id: nanoid(),
        date,
        description,
        link,
        priority
      },
    ]);
  }

  function deleteItem(id) {
    setToDoItems((oldItems) => {
       oldItems.filter((item) => item.id !== id)
    });

  }

  return (
    <div className="App">
      <header>
        <h1>Manage your tasks</h1>
        <Timer />
      </header>
      <main>
        <ToDoForm addItem={addItem}/>
        <ToDoList
            toDoItems={toDoItems}
            deleteItem={deleteItem}
          />
      </main>
    </div>
  );
}