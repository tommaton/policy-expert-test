import { createSelector } from 'reselect';
import { initialState } from './reducer';

const getShoppingList = (state: PolicyExpert.IGetShoppingList) =>
  (state.basket && state.basket.shoppingList) || initialState.shoppingList;

export default createSelector(getShoppingList, (shoppingList: PolicyExpert.IProductData[]) => shoppingList);
