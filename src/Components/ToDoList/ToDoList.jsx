import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDo.css';

export default function ToDoList( {toDoItems, deleteItem} )  {

    //console.log(toDoItems);
    let ToDoItemsJsxList = toDoItems.map(item =>
        <ToDoItem key={item.id} deleteItem={deleteItem} {...item} />);

    //removing {ToDoItemsJsxList}
    //was right before end of sec

    return (
        <section className="to-do-list-container">
           {ToDoItemsJsxList}
        
        </section>
    )
}
