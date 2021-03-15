import { getShoppingList } from './selectors';

describe('redux-basket', () => {
  describe('selectors', () => {
    describe('getBasket', () => {
      const state = {
        basket: {
          shoppingList: [],
        },
      };

      it('should return a shopping list', () => {
        expect(getShoppingList(state)).toBe(state.basket.shoppingList);
      });
    });
  });
});
