import React from 'react';
import { render, screen } from '@testing-library/react';
import { productData } from '@pe/data';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Store from '.';

const mockStore = configureMockStore();
const store = mockStore({
  shoppingList: [],
  updateStatus: 'INITIAL',
});

const renderCoponent = () =>
  render(
    <Provider store={store}>
      <Store />
    </Provider>
  );

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
