import React from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

export default function ToDoForm() {
    return (
        <Form>
            <FormGroup>
                <Label htmlFor="link-date">Date</Label>
                <Input
                    type="date"
                    name="date"
                    id="link-data"
                    required
                />
            </FormGroup>
            <Button type="submit">
                Submit
            </Button>
        </Form>
    )
}
