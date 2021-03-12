declare namespace PolicyExpert {
  interface IProductData {
    id: string;
    prodName: string;
    price: number;
    unit: number;
  }

  interface IInitialState {
    shoppingList: PolicyExpert.IProductData[];
    updateStatus: string;
  }

  interface IGetShoppingList {
    basket: {
      shoppingList: PolicyExpert.IProductData[];
    };
  }
}
