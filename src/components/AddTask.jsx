import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { addTodo } from '../features/todoSlice';
import { useDispatch } from 'react-redux';

const AddTask = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const HandleAddTask = () => {
        if (task.trim() !== '') {
            dispatch(addTodo(task));
            setTask('');
            // console.log(task);
        }
    }

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="New Task"
                    aria-label="New Task"
                    aria-describedby="basic-addon2"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <Button variant="primary" id="button-addon2" onClick={HandleAddTask}>
                    Add Task
                </Button>
            </InputGroup>
        </>
    )
}

export default AddTask