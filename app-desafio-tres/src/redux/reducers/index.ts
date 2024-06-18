import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import emailReducer from './emailReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer, 
  email: emailReducer,
});

export default rootReducer;
