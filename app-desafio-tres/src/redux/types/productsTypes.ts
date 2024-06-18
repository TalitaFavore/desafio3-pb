export interface Product {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    image: string;
    new: boolean;
    sale: boolean;
    discount: number;
    stars: number,
    SKU: string,
    category: string[],
    tags: string[],
    size: string[],
    color: string[],
    stock: number,    
  }
  
  export interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
  }
  
  export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
  export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
  export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
  
  interface FetchProductsRequestAction {
    type: typeof FETCH_PRODUCTS_REQUEST;
  }
  
  interface FetchProductsSuccessAction {
    type: typeof FETCH_PRODUCTS_SUCCESS;
    payload: Product[];
  }
  
  interface FetchProductsFailureAction {
    type: typeof FETCH_PRODUCTS_FAILURE;
    payload: string;
  }
  
  export type ProductActionTypes =
    | FetchProductsRequestAction
    | FetchProductsSuccessAction
    | FetchProductsFailureAction;
  