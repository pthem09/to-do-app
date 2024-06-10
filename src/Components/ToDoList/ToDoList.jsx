import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDo.css';

export default function ToDoList( [toDoItems] )  {

    console.log(toDoItems);
    let ToDoItemsJsxList = toDoItems.map(item => <ToDoItem key={item.id} {...item} />);

    return (
        <section className="to-do-list-container">
            ToDoList
            {ToDoItemsJsxList}
        </section>
    )
}
