import axios from "axios";
import {
  ALL_PRODUCTS,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  SINGLE_PRODUCT,
  SINGLE_PRODUCT_FAIL,
  SINGLE_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productActionTypes";

// Add items to cart
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS });
    const { data } = await axios.get("http://localhost:3001/api/v1/products");
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_PRODUCT });
    const { data } = await axios.get(
      `http://localhost:3001/api/v1/product/${id}`
    );
    dispatch({
      type: SINGLE_PRODUCT_SUCCESS,
      payload: data.product,
    });
  } catch (err) {
    dispatch({
      type: SINGLE_PRODUCT_FAIL,
      payload: err.response.data.message,
    });
  }
};

// Clears any error
export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
