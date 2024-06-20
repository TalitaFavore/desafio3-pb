export interface CartItem {
    productId: number;
    productName: string;
    quantity: number;
    price: number;
    image: string;  
  }
  
  export interface CartState {
    items: CartItem[];
    totalItems: number;
    totalPrice: number;
  }
  
  export enum CartActionTypes {
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
    DECREMENT_ITEM = "DECREMENT_ITEM",
    INCREMENT_ITEM = "INCREMENT_ITEM",
  }
  
  interface AddToCartAction {
    type: CartActionTypes.ADD_TO_CART;
    payload: CartItem;
  }
  
  interface RemoveFromCartAction {
    type: CartActionTypes.REMOVE_FROM_CART;
    payload: number; 
  }
  
  interface DecrementItemAction {
    type: CartActionTypes.DECREMENT_ITEM;
    payload: number; 
  }
  
  interface IncrementItemAction {
    type: CartActionTypes.INCREMENT_ITEM;
    payload: number; 
  }
  
  export type CartAction =
    | AddToCartAction
    | RemoveFromCartAction
    | DecrementItemAction
    | IncrementItemAction;
  