import { Dispatch } from "redux";
import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ProductActionTypes,
} from "../types/productsTypes"


export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    try {
      const response = await axios.get("http://localhost:4000/products");  
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error:any) { 
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: error.message,
      });
    }
  };
};
