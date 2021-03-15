import { createSelector } from 'reselect';

const getShoppingBasket = (state: PolicyExpert.IGetShoppingList) => state.basket.shoppingList || [];

const getShoppingList = createSelector(getShoppingBasket, (shoppingList: PolicyExpert.IProductData[]) => shoppingList);

const getBasketSubTotal = createSelector(getShoppingBasket, (shoppingList: PolicyExpert.IProductData[]) =>
  shoppingList.reduce((acc: number, item: PolicyExpert.IProductData) => acc + item.unit * item.price, 0)
);

const getBasketTotal = createSelector(getBasketSubTotal, (total: number) => total);

export { getShoppingList, getBasketSubTotal, getBasketTotal };
