import React from 'react';
import { Button, Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

export default function ToDoItem({
    deleteItem,
    id,
    date,
    description,
    link,
    priority
}) {
    function handleDelete() {
        deleteItem(id);
    }
    
    return (

        <Card
            className="my-2 to-do-item-container"
            color="secondary"
            inverse>
        <CardHeader>
            {description}
            <Button
                color="danger"
                className="delete-button"
                onClick={handleDelete}>
                    <strong>
                        X
                    </strong>
            </Button>
        </CardHeader>
        <CardBody>
            <CardTitle tag="h5">
            {description}
            </CardTitle>
            <CardText>
                Link:&nbsp;
                <a href={link} target="_blank" className="to-do-item-anchor">
                    {link}
                </a>
                <p>{date}</p>
            </CardText>
            <Button>
            <a href={link} target="_blank" className="to-do-item-anchor">{link}</a>
            </Button>
        </CardBody>
        <CardFooter>
            {priority}
        </CardFooter>
        </Card>

    )
}
