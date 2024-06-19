import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

import ToDoForm from "./Components/ToDoForm/ToDoForm";
import ToDoList from "./Components/ToDoList/ToDoList";
import Timer from "./Components/Timer/Timer";
import CustomNavbar from "./Components/Navbar/CustomNavbar";

export default function App() {
  let [toDoItems, setToDoItems] = useState(getInitialState());

  useEffect(saveToDoItems, [toDoItems]);

  function saveToDoItems() {
    localStorage.setItem("items", JSON.stringify(toDoItems));
  }
  
  function getInitialState() {
    let savedState = localStorage.getItem("items");
    if (typeof savedState === "string") {
      return JSON.parse(savedState);
    }
    return [];
  }

  function addItem(date, category, link, description, priority, color) {
    
    setToDoItems((oldItems) => [
      ...oldItems,  
      {
        id: nanoid(),
        date,
        category,
        description,
        link,
        priority,
        color
      },
    ]);
  }

  function editItem(id, newDate, newCategory, newLink, newDescription, newPriority, newColor) {
    setToDoItems((oldItems) =>
      oldItems.map((item) => {
        if (item.id === id) {
          return {
            id,
            date: newDate,
            category: newCategory,
            description: newDescription,
            link: newLink,
            priority: newPriority,
            color: newColor
          };
        } else {
            return item;
        }
      })
    );
  }
  
  function deleteItem(id) {
    setToDoItems((oldItems) =>
       oldItems.filter((item) => item.id !== id)
    );
  }

  return (
    <div className="App">
      <header>
        <CustomNavbar />
        <h1>Keep tabs on your tasks</h1>
        <h2>without needing hundreds of tabs!</h2>
        <Timer />
      </header>
      <main>
      <ToDoForm submitData={addItem} />
      <ToDoList
          toDoItems={toDoItems}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      </main>
    </div>
  );
}