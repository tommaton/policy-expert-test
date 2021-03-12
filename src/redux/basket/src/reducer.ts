import { UPDATE_BASKET_FAILURE, UPDATE_BASKET_REQUEST, UPDATE_BASKET_SUCCESS } from './types';

interface IInitialState {
  shoppingList: PolicyExpert.IProductData[];
  updateStatus: string;
}

const initialState: IInitialState = {
  shoppingList: [],
  updateStatus: 'INITIAL',
};

const reducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_BASKET_REQUEST:
      return {
        ...state,
        updateStatus: 'PENDING',
      };
    case UPDATE_BASKET_SUCCESS:
      return {
        ...state,
        shoppingList: [...state.shoppingList, payload],
        updateStatus: 'SUCCESS',
      };
    case UPDATE_BASKET_FAILURE:
      return {
        ...state,
        updateStatus: 'FAILURE',
      };
    default:
      return state;
  }
};

export { initialState, reducer };
