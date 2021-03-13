import React, { FC } from 'react';
import { productData } from '@pe/data';
import Product from '@pe/components-product';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

interface IStore {
  addToBasket: (id: string) => void;
}

const Store: FC<IStore> = ({ addToBasket }) => (
  <Container data-testid="myStore" fluid>
    {productData.map(({ prodName, id, unit, price }) => (
      <Row key={id} noGutters>
        <Product id={id} price={price} prodName={prodName} unit={unit} />
        <Col>
          <Button variant="success" size="sm" onClick={() => addToBasket(id)}>
            Buy
          </Button>
        </Col>
      </Row>
    ))}
  </Container>
);

export default Store;
