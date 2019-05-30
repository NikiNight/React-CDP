import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../store/reducers/reducers';

export default (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
  return store;
};