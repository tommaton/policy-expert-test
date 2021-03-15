import { UPDATE_BASKET_FAILURE, UPDATE_BASKET_REQUEST, ADDTO_BASKET_SUCCESS, REMOVEFROM_BASKET_SUCCESS } from './types';
import { reducer, initialState } from './reducer';

describe('redux-basket', () => {
  describe('reducers', () => {
    describe('basket', () => {
      it('should be defined', () => {
        expect(reducer).toBeDefined();
      });
      it('should return a default state', () => {
        expect(reducer(initialState, { type: 'foo' })).toEqual({
          shoppingList: [],
          updateStatus: 'INITIAL',
        });
      });
      it('should set the update status to pending with in request', () => {
        expect(reducer(initialState, { type: UPDATE_BASKET_REQUEST })).toEqual({
          shoppingList: [],
          updateStatus: 'PENDING',
        });
      });
      it('should set the update status to success with in request', () => {
        expect(
          reducer(initialState, {
            type: ADDTO_BASKET_SUCCESS,
            payload: {
              id: '1',
              prodName: 'Face Mask',
              price: 2.5,
              unit: 1,
            },
          })
        ).toEqual({
          shoppingList: [
            {
              id: '1',
              prodName: 'Face Mask',
              price: 2.5,
              unit: 1,
            },
          ],
          updateStatus: 'SUCCESS',
        });
      });
      it('should set the update status to success with in remove request', () => {
        expect(
          reducer(
            {
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
              updateStatus: 'PENDING',
            },
            {
              type: REMOVEFROM_BASKET_SUCCESS,
              payload: 1,
            }
          )
        ).toEqual({
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
          updateStatus: 'SUCCESS',
        });
      });
      it('should set update status to error on failure', () => {
        expect(reducer(initialState, { type: UPDATE_BASKET_FAILURE })).toEqual({
          shoppingList: [],
          updateStatus: 'FAILURE',
        });
      });
    });
  });
});
