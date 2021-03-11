import { UPDATE_BASKET_FAILURE, UPDATE_BASKET_REQUEST, UPDATE_BASKET_SUCCESS } from './types';
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
        expect(reducer(initialState, { type: UPDATE_BASKET_SUCCESS })).toEqual({
          shoppingList: [],
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
