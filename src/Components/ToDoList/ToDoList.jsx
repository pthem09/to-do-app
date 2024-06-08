import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoItem from './ToDoItem';

export default function ToDoList( [toDoItems] )  {

    console.log(toDoItems);
    let ToDoItemsJsxList = toDoItems.map(item => <ToDoItem key={item.id} {...item} />);

    return (
        <div>
            ToDoList
            {ToDoItemsJsxList}
        </div>
    )
}
