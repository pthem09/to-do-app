import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoItem from './ToDoItem';

export default function ToDoList( [toDoItems] )  {

    let ToDoItemsJsxList = toDoItems.map(item => <ToDoItem />);

    return (
        <div>
            ToDoList
            {ToDoItemsJsxList}
        </div>
    )
}
