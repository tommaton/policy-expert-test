// Packages
import { connect } from 'react-redux';
import React from 'react';
import { Dispatch } from 'redux';

// Components
import { actions as basketActions } from '@pe/redux-basket';

import Product from './product.component';

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToBasket: (prodId: string) => dispatch(basketActions.addToBasket(prodId)),
});

export default connect(null, mapDispatchToProps)(Product);
