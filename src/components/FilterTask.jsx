import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const FilterTask = ({ onFilterChange }) => {
    const [filterValue, setFilterValue] = useState('all');

    onFilterChange(filterValue);
    // console.log(filterValue);

    return (
        <>
            <Container className="mb-5">
                <Row>
                    <Col xs={12} md={3}>Filter Task: </Col>
                    <Col xs={12} md={6}>
                        <Form.Select size="sm" onChange={(e) => setFilterValue(e.target.value)}>
                            <option value="all">All</option>
                            <option value="done"> Completed </option>
                            <option value="pending"> Pending </option>
                        </Form.Select>
                    </Col>
                    <Col xs={12} md={3}></Col>
                </Row>
            </Container >
        </>
    )
}

export default FilterTask