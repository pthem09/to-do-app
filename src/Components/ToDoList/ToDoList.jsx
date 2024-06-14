import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDo.css';

export default function ToDoList({
    toDoItems,
    deleteItem,
    editItem
})  {

    let ToDoItemsJsxList = toDoItems.map(item =>
        <ToDoItem
            key={item.id}
            deleteItem={deleteItem}
            editItem={editItem}
            {...item} />
        );

    return (
        <section className="to-do-list-container">
           {ToDoItemsJsxList}        
        </section>
    )
}