import { createStore } from 'redux';
import ProductReducer from './Reducer';

const store = createStore(
  // 1st arg: Reducer
  ProductReducer,
  // 2nd arg: Middleware/Enhancers
  {}
);

export default store;