import { CartAction, CartActionTypes, CartState } from "../types/cartTypes";

const initialState: CartState = {
  items: [],        
  totalItems: 0,    
  totalPrice: 0,    
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + (action.payload.price * action.payload.quantity),
      };

    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.productId !== action.payload),
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - (state.items.find(item => item.productId === action.payload)?.price || 0),
      };

      case CartActionTypes.DECREMENT_ITEM:
        const itemToDecrement = state.items.find(item => item.productId === action.payload);
        if (!itemToDecrement || itemToDecrement.quantity === 1) {
          return state; 
        }
        return {
          ...state,
          items: state.items.map(item =>
            item.productId === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          ),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - itemToDecrement.price,
        };
      
      case CartActionTypes.INCREMENT_ITEM:
        const itemToIncrement = state.items.find(item => item.productId === action.payload);
        if (!itemToIncrement) {
          return state; 
        }
        return {
          ...state,
          items: state.items.map(item =>
            item.productId === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + itemToIncrement.price,
        };
  
    default:
      return state;
  }
};

export default cartReducer;
