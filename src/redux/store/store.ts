import { createStore, combineReducers, compose } from 'redux';
import { BasketReducers } from '../basket';

const reducer = combineReducers({
  basket: BasketReducers,
});

const composeEnhancers = ((window as any) && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, composeEnhancers);

export default store;
