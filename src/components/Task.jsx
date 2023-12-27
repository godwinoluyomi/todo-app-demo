import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, toggleTodo } from '../features/todoSlice';

const Task = ({ id, description, isDone }) => {
    const [toggleEdit, setToggleEdit] = useState(false);
    const [editedTask, setEditedTask] = useState(description);
    const dispatch = useDispatch();

    const handleToggleDone = () => {
        dispatch(toggleTodo(id));
    }

    const handleToggleEdit = () => {
        setToggleEdit(true);
    }

    const handleEditTask = () => {
        if (editedTask.trim() !== '') {
            dispatch(editTodo({ id: id, description: editedTask }))
            setToggleEdit(false);
        }
    }

    const handleDeleteTask = () => {
        dispatch(deleteTodo(id));
    }

    return (
        <>

            <Card bg={isDone ? 'secondary' : 'light'} className='mb-3'>
                <Card.Body>
                    {toggleEdit ? (
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Edit Task"
                                aria-label="Edit Task"
                                aria-describedby="basic-addon2"
                                value={editedTask}
                                onChange={(e) => setEditedTask(e.target.value)}
                            />
                            <Button variant="primary" id="button-addon2" onClick={handleEditTask}>
                                Save
                            </Button>
                        </InputGroup>
                    ) : (
                        <Card.Text>
                            {description ? description : '...'}
                        </Card.Text>
                    )}

                    <Row>

                        <Col xs={6} md={2}>
                            <Form.Check
                                type="checkbox"
                                id="1"
                                label="Done"
                                checked={isDone}
                                onChange={handleToggleDone}
                            />
                        </Col>
                        <Col xs={6} md={1}>
                            <Button size='sm' variant='light'>
                                <FontAwesomeIcon icon={faEdit} style={{ color: '#0000ff' }} onClick={handleToggleEdit} />
                            </Button> </Col>
                        <Col xs={6} md={1}>
                            <Button size='sm' variant='light'>
                                <FontAwesomeIcon icon={faTrashAlt} style={{ color: '#ff0000' }} onClick={handleDeleteTask} />
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        </>
    )
}

export default Task