import { mapStateToProps } from './savings.container';

describe('Savings container', () => {
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

    it('maps state correctly', () => {
      const { savings } = mapStateToProps(state);
      expect(savings).toBe({
        savings: [
          {
            description: 'Face Mask 2 for £4',
            saving: -1.0,
          },
          {
            description: 'Toilet Paper 6 for 5',
            saving: -0.65,
          },
        ],
        totalSavings: -1.65,
      });
    });
  });
});
