import React, { useState } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import './ToDoForm.css';

const PRIORITIES = {
    Low: 'Low',
    Medium: 'Medium',
    High: 'High',
}

export default function ToDoForm({ addItem }) {

    const [date, setDate] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(PRIORITIES.Medium);

    function handleDateChange(e) {
        setDate(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleDescChange(e) {
        setDescription(e.target.value);
    }

    function handlePriotChange(e) {
        setPriority(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const [y, M, d] = date.split('-');
        const formattedDate = `${M}/${d}/${y}`;
        addItem(formattedDate, link, description, priority);

        setDate('');
        setLink('');
        setDescription('');
        setPriority(PRIORITIES.Medium);
    }

    return (
        <Form
            data-bs-theme="dark"
            className="to-do-form"
            onSubmit={handleSubmit}>
            <FormGroup className="to-do-row">
                <Label htmlFor="link-date">
                    Date
                </Label>
                <Input
                    type="date"
                    name="date"
                    id="link-data"
                    value={date}
                    onChange={handleDateChange}
                    required
                />
            </FormGroup>
            <FormGroup className="to-do-row">
                <Label htmlFor="link-url">
                    Link
                </Label>
                <Input
                    type="url"
                    name="url"
                    id="link-url"
                    value={link}
                    onChange={handleLinkChange}
                    required
                />
            </FormGroup>
            <FormGroup className="to-do-row">
                <Label htmlFor="link-description">
                    Description
                </Label>
                <Input
                    type="text"
                    name="description"
                    id="link-description"
                    value={description}
                    onChange={handleDescChange}
                    required
                />
            </FormGroup>
            <FormGroup className="to-do-row">
                <Input
                    type="radio"
                    name="radio-priority"
                    value={PRIORITIES.High}
                    checked={priority === PRIORITIES.High}
                    onChange={handlePriotChange}
                    id="priot-high"
                />
                {' '}
                <Label htmlFor="priot-high" className="me-3">
                    High
                </Label>
                <Input
                    type="radio"
                    name="radio-priority"
                    value={PRIORITIES.Medium}
                    checked={priority === PRIORITIES.Medium}
                    onChange={handlePriotChange}
                    id="priot-med"
                />
                {' '}
                <Label htmlFor="priot-med" className="me-3">
                    Medium
                </Label>
                <Input
                    type="radio"
                    name="radio-priority"
                    value={PRIORITIES.Low}
                    checked={priority === PRIORITIES.Low} 
                    onChange={handlePriotChange}
                    id="priot-low"
                />
                {' '}
                <Label htmlFor="priot-low" className="me-3">
                    Low
                </Label>
            </FormGroup>
            <Button type="submit">
                Submit
            </Button>
        </Form>
    )
}
