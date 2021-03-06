import { getShoppingList, getBasketSubTotal, getBasketTotal, getSavings } from './selectors';

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

    describe('getBasketTotals', () => {
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
        expect(getBasketTotal(state)).toEqual(4.65);
      });
    });

    describe('getSavings', () => {
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

            {
              id: '2',
              prodName: 'Toilet Paper',
              price: 0.65,
              unit: 1,
            },
            {
              id: '2',
              prodName: 'Toilet Paper',
              price: 0.65,
              unit: 1,
            },
            {
              id: '2',
              prodName: 'Toilet Paper',
              price: 0.65,
              unit: 1,
            },
            {
              id: '2',
              prodName: 'Toilet Paper',
              price: 0.65,
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
        expect(getSavings(state)).toStrictEqual({
          savings: [
            {
              description: 'Face Mask 2 for ??4',
              saving: '-1.00',
            },
            {
              description: 'Toilet Paper 6 for 5',
              saving: '-0.65',
            },
          ],
          totalSavings: '-1.65',
        });
      });
    });
  });
});
