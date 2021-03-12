import { mapDispatchToProps } from './product.container';

jest.mock('@pe/redux-basket');

describe('Product container', () => {
  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    it('should return an object containing actions', () => {
      expect(props.addToBasket).toBeDefined();
      props.addToBasket('id');
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
