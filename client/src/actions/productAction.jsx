import axios from "axios";
import {
  ALL_PRODUCTS,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
} from "../constants/productActionTypes";

// Get Products Details
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

// Clears any error
export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
