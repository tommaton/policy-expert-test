import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Product: FC<PolicyExpert.IProductData> = ({ prodName, id, price, unit }) => (
  <>
    <Col>{`Item #${id}:`}</Col>
    <Col>{prodName}</Col>
    <Col>{price.toFixed(2)}</Col>
    <Col>
      <Button variant="success" size="sm">
        Buy
      </Button>
    </Col>
  </>
);

export default Product;
