import { getShoppingList, getBasketSubTotal, getBasketTotal } from './selectors';

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

    describe('getBasketSubTotal', () => {
      const state = {
        basket: {
          shoppingList: [
            {
              id: '1',
              prodName: 'Face Mask',
              price: 2.5,
              unit: 1,
            },
            {
              id: '1',
              prodName: 'Face Mask',
              price: 2.5,
              unit: 1,
            },
            {
              id: '2',
              prodName: 'Toilet Paper',
              price: 0.65,
              unit: 1,
            },
          ],
        },
      };

      it('should return a subtotal of all items in basket', () => {
        expect(getBasketSubTotal(state)).toBe(5.65);
      });

      it('should return a total of all items in basket', () => {
        expect(getBasketTotal(state)).toBe(5.65);
      });
    });
  });
});
