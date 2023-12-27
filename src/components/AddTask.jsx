import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const AddTask = () => {
    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="New Task"
                    aria-label="New Task"
                    aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                    Add Task
                </Button>
            </InputGroup>
        </>
    )
}

export default AddTask