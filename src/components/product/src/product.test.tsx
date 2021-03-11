import React from 'react';
import { render } from '@testing-library/react';
import Product from '.';

const defaultProps = { prodName: 'Face Mask', unit: 1, id: '1', price: 2.5 };

const renderCoomponent = () => render(<Product {...defaultProps} />);

describe('product', () => {
  it('should render component', () => {
    renderCoomponent();
  });

  it('should display name and price of product', () => {
    const { getByText } = renderCoomponent();

    getByText(defaultProps.prodName);
    getByText(defaultProps.price);
  });
});
