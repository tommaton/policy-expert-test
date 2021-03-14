// Packages
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// Components
import { actions as basketActions } from '@pe/redux-basket';

import Store from './store.component';

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToBasket: (prodId: string) => dispatch(basketActions.addToBasket(prodId)),
});

export default connect(null, mapDispatchToProps)(Store);
