// actions/cartActions.ts
import { CartActionTypes, CartItem, CartAction } from "../types/cartTypes";

export const addToCart = (item: CartItem): CartAction => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (productId: number): CartAction => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: productId,
});

export const decrementItem = (productId: number): CartAction => ({
  type: CartActionTypes.DECREMENT_ITEM,
  payload: productId,
});

export const incrementItem = (productId: number): CartAction => ({
  type: CartActionTypes.INCREMENT_ITEM,
  payload: productId,
});
