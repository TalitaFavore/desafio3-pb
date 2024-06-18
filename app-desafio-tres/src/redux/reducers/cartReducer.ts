import { CartAction, CartActionTypes, CartState } from "../types/cartTypes";

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      const existingItemIndex = state.items.findIndex(item => item.productId === action.payload.productId);
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return {...state, items: updatedItems };
      } else {
        return {...state, items: [...state.items, action.payload] };
      }

    case CartActionTypes.REMOVE_FROM_CART:
      return {
       ...state,
        items: state.items.filter(item => item.productId!== action.payload),
      };

    case CartActionTypes.DECREMENT_ITEM:
      return {
       ...state,
        items: state.items.map(item =>
          item.productId === action.payload? {...item, quantity: item.quantity - 1 } : item
        ),
      };

    case CartActionTypes.INCREMENT_ITEM:
      return {
       ...state,
        items: state.items.map(item =>
          item.productId === action.payload? {...item, quantity: item.quantity + 1 } : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
