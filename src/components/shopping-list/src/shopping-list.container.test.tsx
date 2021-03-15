import { mapDispatchToProps, mapStateToProps } from './shopping-list.container';

describe('Shopping List container', () => {
  describe('mapStateToProps', () => {
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

    it('maps state correctly', () => {
      const { shoppingList, subTotal } = mapStateToProps(state);
      expect(shoppingList).toBe(state.basket.shoppingList);
      expect(subTotal).toEqual(8.15);
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    it('should return an object containing actions', () => {
      expect(props.removeFromBasket).toBeDefined();
      props.removeFromBasket(1);
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
