import React from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './components/NavBar';
import AddTask from './components/AddTask';
import FilterTask from './components/FilterTask';

function App() {

  return (
    <>
      <NavBar />

      <Container>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={6}>
            <AddTask />
            <FilterTask />
          </Col>
          <Col xs={12} md={3}></Col>
        </Row>
      </Container>





    </>
  )
}

export default App
