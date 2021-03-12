import { mapDispatchToProps, mapStateToProps } from './shopping-list.container';

jest.mock('@pe/redux-basket');

describe('Product container', () => {
  describe('mapStateToProps', () => {
    const state = {
      shoppingList: [
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
      ],
    };

    it('maps state correctly', () => {
      const props = mapStateToProps(state);
      expect(props.shoppingList).toBe(state.shoppingList);
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    it('should return an object containing actions', () => {
      expect(props.removeFromBasket).toBeDefined();
      props.removeFromBasket('index');
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
