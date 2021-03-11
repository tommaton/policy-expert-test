import React from 'react';
import { render, screen } from '@testing-library/react';
import { productData } from '@pe/data';
import Store from '.';

const renderCoponent = () => render(<Store />);

describe('product', () => {
  it('should render store', () => {
    const { getByTestId } = renderCoponent();

    getByTestId('myStore');
  });

  it('should render same number of product in product data', async () => {
    const { getAllByText } = renderCoponent();

    const productItems = getAllByText(/Item #[0-9]:/);

    expect(productItems.length).toEqual(productData.length);
  });
});
