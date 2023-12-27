import React, { useState } from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './components/NavBar';
import AddTask from './components/AddTask';
import FilterTask from './components/FilterTask';
import ListTask from './components/ListTask';

function App() {

  const [filter, setFilter] = useState();
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  }
  // console.log(filter);

  return (
    <>
      <NavBar />

      <Container>
        <Row>
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={6}>
            <AddTask />
            <FilterTask onFilterChange={handleFilterChange} />
            <ListTask filter={filter} />
          </Col>
          <Col xs={12} md={3}></Col>
        </Row>
      </Container>





    </>
  )
}

export default App
