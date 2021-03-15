import { connect } from 'react-redux';

// Components
import { getSavings } from '@pe/redux-basket';

import Savings from './savings.component';

export const mapStateToProps = (state: PolicyExpert.IGetShoppingList) => ({
  savings: getSavings(state),
});

export default connect(mapStateToProps, null)(Savings);
