import React from 'react';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ShoppingList from '.';

const mockStore = configureMockStore();
const store = mockStore({
  basket: {
    shoppingList: [
      { prodName: 'Face Mask', unit: 1, id: '1', price: 2.5, description: 'each' },
      {
        id: '2',
        prodName: 'Toilet Paper',
        price: 0.65,
        unit: 1,
        description: 'per roll',
      },
    ],
    updateStatus: 'INITIAL',
  },
});

const defaultProps = {
  shoppingList: [
    { prodName: 'Face Mask', unit: 1, id: '1', price: 2.5, description: 'each' },
    {
      id: '2',
      prodName: 'Toilet Paper',
      price: 0.65,
      unit: 1,
      description: 'per roll',
    },
  ],
  subTotal: 3.15,
  total: 3.15,
};

const renderCoomponent = () =>
  render(
    <Provider store={store}>
      <ShoppingList {...defaultProps} />)
    </Provider>
  );

describe('Shopping list', () => {
  it('should render component', () => {
    renderCoomponent();
  });

  it('should display shopping list and totals', () => {
    const { getByText } = renderCoomponent();
    const { shoppingList } = defaultProps;

    getByText(`Item #${shoppingList[0].id}:`);
    getByText(`Sub total: ${defaultProps.subTotal.toFixed(2)}`);
    getByText(`Total: ${defaultProps.total.toFixed(2)}`);
  });
});
