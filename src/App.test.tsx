import React from 'react';
import { render, screen } from '@testing-library/react';

import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from './App';

const mockStore = configureMockStore();
const store = mockStore({
  basket: {
    shoppingList: [],
    updateStatus: 'INITIAL',
  },
});

test('renders app with store', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const myStore = screen.getByTestId('myStore');
  expect(myStore).toBeInTheDocument();
});
