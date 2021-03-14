import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '@pe/components-product';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

interface IShoppingList {
  shoppingList: PolicyExpert.IProductData[];
  removeFromBasket: (index: number) => void;
}

const ShoppingList: FC<IShoppingList> = ({ shoppingList, removeFromBasket }) => (
  <Container data-testid="myShoppinglist" fluid>
    {shoppingList.map(({ prodName, id, unit, price }, index) => (
      <Row key={`${id}-${index}`} noGutters>
        <Product id={id} price={price} prodName={prodName} unit={unit} />
        <Col>
          <Button variant="success" size="sm" onClick={() => removeFromBasket(index)}>
            Remove
          </Button>
        </Col>
      </Row>
    ))}
  </Container>
);

export default ShoppingList;
