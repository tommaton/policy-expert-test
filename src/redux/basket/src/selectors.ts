import { createSelector } from 'reselect';
import { initialState } from './reducer';

const getShoppingBasket = (state: PolicyExpert.IGetShoppingList) => state.basket.shoppingList || [];

const getShoppingList = createSelector(getShoppingBasket, (shoppingList: PolicyExpert.IProductData[]) => shoppingList);

export { getShoppingList };
