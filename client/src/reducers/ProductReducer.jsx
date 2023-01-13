import {
  ALL_PRODUCTS,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
  SINGLE_PRODUCT,
  SINGLE_PRODUCT_FAIL,
  SINGLE_PRODUCT_SUCCESS,
} from "../constants/productActionTypes";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        loading: true,
        products: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
      };
    case ALL_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const singleProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT:
      return {
        loading: true,
        ...state,
      };
    case SINGLE_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case SINGLE_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
