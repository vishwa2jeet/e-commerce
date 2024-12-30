import { combineReducers, UnknownAction } from '@reduxjs/toolkit';

import product from './product/reducer';


// COMBINE AND EXPOSE THE REDUCERS AVAILABLE IN THE APP
const appReducer = combineReducers({
  product: product,

});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;

