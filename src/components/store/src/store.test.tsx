import React from 'react';
import { render } from '@testing-library/react';
import { productData } from '@pe/data';
import Store from '.';

const renderCoponent = () => render(<Store productList={productData} />);

describe('product', () => {
  it('should render store', () => {
    const { getByTestId } = renderCoponent();

    getByTestId('myStore');
  });

  it('should render same number of product in product data', async () => {
    const { findAllByText } = renderCoponent();

    const productItems = await findAllByText(/Item #[0-9]: /);

    expect(productItems.length).toHaveLength(productData.length);
  });
});
