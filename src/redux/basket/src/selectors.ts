import { createSelector } from 'reselect';
import { discountData, productData } from '@pe/data';

const getShoppingBasket = (state: PolicyExpert.IGetShoppingList) => state.basket.shoppingList || [];

const getShoppingList = createSelector(getShoppingBasket, (shoppingList: PolicyExpert.IProductData[]) => shoppingList);

const getBasketSubTotal = createSelector(getShoppingBasket, (shoppingList: PolicyExpert.IProductData[]) =>
  shoppingList.reduce((acc: number, item: PolicyExpert.IProductData) => acc + item.unit * item.price, 0)
);

const getSavings = createSelector(
  getShoppingBasket,
  (shoppingList: PolicyExpert.IProductData[]): PolicyExpert.ISavings => {
    const savings: PolicyExpert.ISaving[] = [];
    let totalSavings = 0;
    discountData.forEach((discount: PolicyExpert.IDiscountData) => {
      const prodGroupCount = shoppingList.filter(({ id }) => id === discount.id).length;
      const productDetails = productData.find(({ id }) => id === discount.id);

      if (productDetails) {
        if (discount.type === 'BOGOF') {
          const numberSavingsMade = Math.floor(prodGroupCount / discount.quantity);

          if (numberSavingsMade > 0) {
            for (let i = 0; i < numberSavingsMade; i++) {
              const discountSavings = Number(
                Math.abs((discount.quantity - discount.value) * productDetails.price) * -1
              ).toFixed(2);
              savings.push({
                description: `${productDetails?.prodName} ${discount.quantity} for ${discount.value}`,
                saving: discountSavings,
              });
              totalSavings += Number(discountSavings);
            }
          }
        }

        if (discount.type === 'Price') {
          const numberSavingsMade = Math.floor(prodGroupCount / discount.quantity);

          if (numberSavingsMade > 0) {
            for (let i = 0; i < numberSavingsMade; i++) {
              const discountSavings = Number(
                Math.abs(discount.quantity * productDetails.price - discount.value) * -1
              ).toFixed(2);
              savings.push({
                description: `${productDetails?.prodName} ${discount.quantity} for £${discount.value}`,
                saving: discountSavings,
              });
              totalSavings += Number(discountSavings);
            }
          }
        }
      }
    });

    return {
      savings,
      totalSavings: Number(totalSavings).toFixed(2),
    };
  }
);

const getBasketTotal = createSelector(
  getBasketSubTotal,
  getSavings,
  (total: number, savings) => total + Number(savings.totalSavings)
);

export { getShoppingList, getBasketSubTotal, getBasketTotal, getSavings };
