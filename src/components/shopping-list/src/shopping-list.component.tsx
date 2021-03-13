import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '@pe/components-product';

interface IShoppingList {
  shoppingList: PolicyExpert.IProductData[];
}

const ShoppingList: FC<IShoppingList> = ({ shoppingList }) => {
  console.log('shoppingList', shoppingList);
  return (
    <Container data-testid="myShoppinglist" fluid>
      {shoppingList.map(({ prodName, id, unit, price }) => (
        <Row key={id} noGutters>
          <Product price={price} prodName={prodName} unit={unit} />
        </Row>
      ))}
    </Container>
  );
};

export default ShoppingList;
