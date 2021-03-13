import { connect } from 'react-redux';
import React from 'react';
import { Dispatch } from 'redux';

// Components
import { actions as basketActions, getShoppingList } from '@pe/redux-basket';

import ShoppingList from './shopping-list.component';

export const mapStateToProps = (state: PolicyExpert.IGetShoppingList) => ({
  shoppingList: getShoppingList(state),
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToBasket: (prodId: string) => dispatch(basketActions.addToBasket(prodId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
