import React from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

export default function ToDoForm() {
    return (
        <Form data-bs-theme="dark" className="to-do-form">
            <FormGroup className="to-do-row">
                <Label htmlFor="link-date">Date</Label>
                <Input
                    type="date"
                    name="date"
                    id="link-data"
                    required
                />
            </FormGroup>
            <FormGroup className="to-do-row">
                <Label htmlFor="link-url">Link</Label>
                <Input
                    type="url"
                    name="url"
                    id="link-url"
                    required
                />
            </FormGroup>
            <FormGroup className="to-do-row">
                <Label htmlFor="link-description">Description</Label>
                <Input
                    type="text"
                    name="description"
                    id="link-description"
                    required
                />
            </FormGroup>
            <FormGroup className="to-do-row">
                <Input
                    type="radio"
                    name="radio-priority"
                    value="High"
                    id="priot-high"
                />
                <Label htmlFor="link-description">Description</Label>
            </FormGroup>
            <Button type="submit">
                Submit
            </Button>
        </Form>
    )
}
