import { createStore, combineReducers, compose } from 'redux';
import { reducer } from '../basket';

const allReducer = combineReducers({
  basket: reducer,
});

const composeEnhancers = ((window as any) && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(allReducer, {}, composeEnhancers);

export default store;
