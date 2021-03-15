import { mapDispatchToProps, mapStateToProps } from './shopping-list.container';

describe('Shopping List container', () => {
  describe('mapStateToProps', () => {
    let state: PolicyExpert.IGetShoppingList;

    beforeEach(() => {
      state = {
        basket: {
          shoppingList: [
            {
              id: '1',
              prodName: 'Face Mask',
              price: 2.5,
              unit: 1,
              description: 'each',
            },
            {
              id: '1',
              prodName: 'Face Mask',
              price: 2.5,
              unit: 1,
              description: 'each',
            },
            {
              id: '2',
              prodName: 'Toilet Paper',
              price: 0.65,
              unit: 1,
              description: 'per roll',
            },
          ],
        },
      };
    });

    it('maps state correctly (Face Mask discounts) ', () => {
      const { shoppingList, subTotal, total } = mapStateToProps(state);
      expect(shoppingList).toBe(state.basket.shoppingList);
      expect(subTotal).toEqual(5.65);
      expect(total).toEqual(4.65);
    });

    it('maps state correctly (multiple discounts) ', () => {
      const additionalProducts = [
        {
          id: '2',
          prodName: 'Toilet Paper',
          price: 0.65,
          unit: 1,
          description: 'per roll',
        },
        {
          id: '2',
          prodName: 'Toilet Paper',
          price: 0.65,
          unit: 1,
          description: 'per roll',
        },
        {
          id: '2',
          prodName: 'Toilet Paper',
          price: 0.65,
          unit: 1,
          description: 'per roll',
        },
        {
          id: '2',
          prodName: 'Toilet Paper',
          price: 0.65,
          unit: 1,
          description: 'per roll',
        },
        {
          id: '2',
          prodName: 'Toilet Paper',
          price: 0.65,
          unit: 1,
          description: 'per roll',
        },
      ];
      const updatedState = state.basket.shoppingList.concat(additionalProducts);
      state.basket.shoppingList = updatedState;
      const { shoppingList, subTotal, total } = mapStateToProps(state);
      expect(shoppingList).toBe(state.basket.shoppingList);
      expect(subTotal).toEqual(Number((8.9).toFixed(2)));
      expect(total).toEqual(7.25);
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
