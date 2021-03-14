import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// Components
import { actions as basketActions, getShoppingList } from '@pe/redux-basket';

import ShoppingList from './shopping-list.component';

export const mapStateToProps = (state: PolicyExpert.IGetShoppingList) => ({
  shoppingList: getShoppingList(state),
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeFromBasket: (listIndex: number) => dispatch(basketActions.removeFromBasket(listIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
