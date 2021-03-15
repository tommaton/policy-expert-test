import { UPDATE_BASKET_FAILURE, UPDATE_BASKET_REQUEST, ADDTO_BASKET_SUCCESS, REMOVEFROM_BASKET_SUCCESS } from './types';

const initialState: PolicyExpert.IInitialState = {
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
    case ADDTO_BASKET_SUCCESS:
      return {
        ...state,
        shoppingList: [...state.shoppingList, payload].slice().sort((a, b) => parseFloat(b.id) - parseFloat(a.id)),
        updateStatus: 'SUCCESS',
      };
    case REMOVEFROM_BASKET_SUCCESS:
      return {
        ...state,
        shoppingList: state.shoppingList.filter((item, index) => index !== payload),
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

export { reducer, initialState };
