import { createSelector } from 'reselect';
import { initialState } from './reducer';

const getShoppingList = (state) => state.shoppingList || initialState.shoppingList;

export default createSelector(getShoppingList, (shoppingList: PolicyExpert.IProductData[]) => shoppingList);
