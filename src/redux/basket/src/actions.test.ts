import configureMockStore from 'redux-mock-store';

import { actions, types } from './index';

const { addToBasket } = actions;

const { ADDTO_BASKET_SUCCESS } = types;

const mockStore = configureMockStore();

describe('basket actions', () => {
  test('addToBasket', () => {
    const store = mockStore({});
    store.dispatch(addToBasket('1'));
    expect(store.getActions()).toEqual([
      {
        type: ADDTO_BASKET_SUCCESS,
        payload: {
          id: '1',
          prodName: 'Face Mask',
          price: 2.5,
          unit: 1,
        },
      },
    ]);
  });
});
