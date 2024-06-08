import React from 'react';

export default function ToDoItem({id, description}) { //Paul - add other properties here as needed
    return (
       <section className="to-do-list-item-container">
            <p className="to-do-item-field">Id: { id }</p>
            <p className="to-do-item-field">Description: { description }</p>
            <p className="to-do-item-field">
                Link: 
                <a href={link} target="_blank" className="to-do-item-anchor">
                    {link}
                </a>
            </p>    
        </section>
    )
}
