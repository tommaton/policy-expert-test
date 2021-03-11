import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Store from '@pe/components-store';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Store</h2>
          <Store />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Basket</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
