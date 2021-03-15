import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '@pe/components-product';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

interface IShoppingList {
  shoppingList: PolicyExpert.IProductData[];
  removeFromBasket: (index: number) => void;
  subTotal: number;
  total: number;
}

const ShoppingList: FC<IShoppingList> = ({ shoppingList, removeFromBasket, subTotal, total }) => (
  <Container data-testid="myShoppinglist" fluid>
    {shoppingList.map(({ prodName, id, unit, price, description }, index) => (
      <Row key={`${id}-${index}`} noGutters>
        <Product id={id} price={price} prodName={prodName} unit={unit} description={description} />
        <Col>{(unit * price).toFixed(2)}</Col>
        <Col md={{ span: 4 }}>
          <Button variant="success" size="sm" onClick={() => removeFromBasket(index)}>
            Remove
          </Button>
        </Col>
      </Row>
    ))}
    <Row noGutters>
      <Col md={{ span: 6 }}>Sub total</Col>
      <Col>{subTotal.toFixed(2)}</Col>
    </Row>
    <Row noGutters>
      <Col md={{ span: 6 }}>Total</Col>
      <Col>{total.toFixed(2)}</Col>
    </Row>
  </Container>
);

export default ShoppingList;
