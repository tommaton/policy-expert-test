import { UPDATE_BASKET_FAILURE, UPDATE_BASKET_REQUEST, UPDATE_BASKET_SUCCESS } from './types';

const iniitalState = {
  shoppingList: [],
  updateStatus: 'INITIAL',
};

const reducer = (state = iniitalState, action: any) => {
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
        ...payload,
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

export default reducer;
