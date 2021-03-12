import { productData } from '@pe/data';
import { UPDATE_BASKET_SUCCESS } from './types';

export const addToBasket = (id: string) => {
  const chosenProduct = productData.find((product: PolicyExpert.IProductData) => product.id === id);

  return {
    type: UPDATE_BASKET_SUCCESS,
    payload: chosenProduct,
  };
};
