import { productData } from '@pe/data';
import { ADDTO_BASKET_SUCCESS, REMOVEFROM_BASKET_SUCCESS } from './types';

export const addToBasket = (id: string) => {
  const chosenProduct = productData.find((product: PolicyExpert.IProductData) => product.id === id);

  return {
    type: ADDTO_BASKET_SUCCESS,
    payload: chosenProduct,
  };
};

export const removeFromBasket = (shoppingItemIndex: number) => ({
  type: REMOVEFROM_BASKET_SUCCESS,
  payload: shoppingItemIndex,
});
