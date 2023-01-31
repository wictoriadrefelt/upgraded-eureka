import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  CLEAR_ERRORS,
  SINGLE_ORDER_REQUEST,
  SINGLE_ORDER_SUCCESS,
  SINGLE_ORDER_FAIL,
} from "../constants/orderActionTypes";

import axios from "axios";

// Create Order
export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:3001/api/v1/order/new",
      order,
      config
    );

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const singleOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get("http://localhost:3001/api/v1/myOrders");

    dispatch({ type: SINGLE_ORDER_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: SINGLE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
