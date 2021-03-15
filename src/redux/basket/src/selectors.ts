import { createSelector } from 'reselect';

const getShoppingBasket = (state: PolicyExpert.IGetShoppingList) => state.basket.shoppingList || [];

const getShoppingList = createSelector(getShoppingBasket, (shoppingList: PolicyExpert.IProductData[]) => shoppingList);

const getBasketSubTotal = createSelector(getShoppingBasket, (shoppingList) =>
  shoppingList.reduce((acc: number, item: PolicyExpert.IProductData) => acc + item.price, 0)
);

export { getShoppingList, getBasketSubTotal };
