import React, { FC } from 'react';
import Col from 'react-bootstrap/cjs/Col';

const Product: FC<PolicyExpert.IProductData> = ({ prodName, id, price, unit }) => (
  <>
    <Col>{prodName}</Col>
    <Col>{price}</Col>
  </>
);

export default Product;
