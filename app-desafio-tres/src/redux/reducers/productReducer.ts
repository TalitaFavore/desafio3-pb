import {
    ProductState,
    ProductActionTypes,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
  } from "../types/productsTypes"
  
  const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action: ProductActionTypes): ProductState => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload,
          loading: false,
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  