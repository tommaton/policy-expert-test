import React from 'react';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Product from '.';

const mockStore = configureMockStore();
const store = mockStore({
  shoppingList: [],
  updateStatus: 'INITIAL',
});

const defaultProps = { prodName: 'Face Mask', unit: 1, id: '1', price: 2.5 };

const renderCoomponent = () =>
  render(
    <Provider store={store}>
      <Product {...defaultProps} />)
    </Provider>
  );

describe('product', () => {
  it('should render component', () => {
    renderCoomponent();
  });

  it('should display name and price of product', () => {
    const { getByText } = renderCoomponent();

    getByText(`Item #${defaultProps.id}:`);
    getByText(defaultProps.prodName);
    getByText(defaultProps.price.toFixed(2));
  });
});
