import React, { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import {
    Button,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText,
    Modal,
    ModalHeader,
    ModalBody
} from "reactstrap";

export default function ToDoItem({
    deleteItem,
    editItem,
    id,
    date,
    category,
    priority,
    link,
    description,
    color
}) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(oldModalState => !oldModalState);

    function handleDelete() {
        deleteItem(id);
    }
    
    function usDateToYyyyMmDd(date) {
        const [M, d, y] = date.split('/');
        return `${y}-${M}-${d}`;
    }

    function updateItem(formattedDate, category, link, description, priority, color) {
        editItem(formattedDate, category, link, description, priority, color);
        setModal(false);
    }

    return (
        <Card
            className="my-2 to-do-item-container"
            color="secondary"
            inverse>
        <CardHeader className="card-header-footer">
            <div>
                { category }
            </div>
            <div>
                <Button
                    color="success"
                    className="card-button"
                    onClick={toggle}>
                    🖉
                </Button>
                <Button
                    color="danger"
                    className="card-button delete-button"
                    onClick={handleDelete}>
                        <strong>
                            X
                        </strong>
                </Button>
            </div>
        </CardHeader>
        <CardBody>
            <CardTitle tag="h5">
                { description }
            </CardTitle>
            <CardText>
                Link:&nbsp;
                <a href={link} target="_blank" className="to-do-item-anchor">
                    {link}
                </a>
            </CardText>
        </CardBody>
        <CardFooter className="card-header-footer">
            {date} (Importance: { priority })
        </CardFooter>
        <Modal isOpen={modal} toggle={toggle} fade={true}>
            <ModalHeader data-bs-theme="dark" className="bg-dark" toggle={toggle}>Edit { category }: { description }</ModalHeader>
            <ModalBody data-bs-theme="dark" className="bg-dark">
                <ToDoForm
                    id={id}
                    defaultDate={usDateToYyyyMmDd(date)}
                    defaultCategory={category}
                    defaultPriority={priority}
                    defaultLink={link}
                    defaultDescription={description}
                    defaultColor={color}
                    submitData={updateItem}
                    cancelClicked={toggle}
                />
            </ModalBody>
        </Modal>
        </Card>
    )
}