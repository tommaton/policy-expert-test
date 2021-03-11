import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Store from '@pe/components-store';

function App() {
  return (
    <Container>
      <Row>
        <Col>Store</Col>
        <Col>Basket</Col>
      </Row>
      <Row>
        <Col>
          <Store />
        </Col>
        <Col>Basket</Col>
      </Row>
    </Container>
  );
}

export default App;
