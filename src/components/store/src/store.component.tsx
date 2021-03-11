import React from 'react';
import { productData } from '@pe/data';
import Product from '@pe/components-product';
import { Container, Row } from 'react-bootstrap';

const Store = () => (
  <Container data-testid="myStore">
    {productData.map(({ prodName, id, unit, price }) => (
      <Row key={id}>
        <Product id={id} price={price} prodName={prodName} unit={unit} />
      </Row>
    ))}
  </Container>
);

export default Store;
