import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';

const Product: FC<PolicyExpert.IProductData> = ({ prodName, id, price, unit, description }) => (
  <>
    <Col>{id && `Item #${id}:`}</Col>
    <Col>{prodName}</Col>
    <Col>
      {price.toFixed(2)} ({description})
    </Col>
  </>
);

export default Product;
