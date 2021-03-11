import { createStore, combineReducers, compose } from 'redux';
import { reducer } from '../basket';

const allReducer = combineReducers({
  basket: reducer,
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(allReducer, composeEnhancers);

export default store;
