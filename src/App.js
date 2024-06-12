import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

import ToDoForm from './Components/ToDoForm/ToDoForm';
import ToDoList from './Components/ToDoList/ToDoList';

export default function App() {
  let [toDoItems, setToDoItems] = useState([getInitialState]);

  function getInitialState() {
    let savedState = localStorage.getItem('items');
    if (typeof savedState === 'string') {
      return JSON.parse(savedState);
    }
    //return [];
  }

  function addItem(date, link, description, priority) {
    setToDoItems((oldItems) => {
      let newItems = [
      ...oldItems,
      {
        id: nanoid(),
        date,
        description,
        link,
        priority
      },
    ];
    localStorage.setItem('items', JSON.stringify(newItems));
    return newItems
  });
  }

  function deleteItem(id) {
    setToDoItems((oldItems) => {
        let newItems = oldItems.filter((item) => item.id !== id);
        localStorage.setItem('items', JSON.stringify(newItems));
        return newItems;
    });

  }

  return (
    <div className="App">
      <header>
        <h1>Manage your tasks</h1>
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