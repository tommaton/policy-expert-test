import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

interface ILocalProductData extends PolicyExpert.IProductData {
  addToBasket?: any;
}

const Product: FC<ILocalProductData> = ({ prodName, id, price, unit, addToBasket }) => (
  <>
    <Col>{`Item #${id}:`}</Col>
    <Col>{prodName}</Col>
    <Col>{price.toFixed(2)}</Col>
    <Col>
      <Button variant="success" size="sm" onClick={() => addToBasket(id)}>
        Buy
      </Button>
    </Col>
  </>
);

export default Product;
