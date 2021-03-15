import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface ISavings {
  savings?: PolicyExpert.ISavings;
}

const Savings: FC<ISavings> = ({ savings }) => {
  const { totalSavings } = savings || {};

  return (
    <>
      <h2>Savings</h2>
      <Container>
        {savings &&
          savings.savings.map(({ description, saving }, index) => (
            <Row key={index}>
              <Col>{description}</Col>
              <Col>{saving}</Col>
            </Row>
          ))}
        {totalSavings && (
          <Row>
            <Col>Total savings</Col>
            <Col>{totalSavings}</Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Savings;
