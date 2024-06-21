import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import emailReducer from './emailReducer';
import { ProductState } from '../types/productsTypes';
import { CartState } from '../types/cartTypes';
import { EmailState } from '../types/emailTypes';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer, 
  email: emailReducer,
});

export type RootState = {
  products: ProductState;
  cart: CartState;
  email: EmailState;
};

export default rootReducer;
