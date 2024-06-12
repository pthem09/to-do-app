import React from 'react';
import { Button, Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

export default function ToDoItem({date, description, link, priority}) { //Paul - add other properties here as needed
    return (

        <Card
            className="my-2 to-do-item-container"
            color="secondary"
            inverse>
        <CardHeader>
            {description}
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
