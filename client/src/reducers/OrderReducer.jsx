import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
  CLEAR_ERRORS,
  SINGLE_ORDER_REQUEST,
  SINGLE_ORDER_SUCCESS,
  SINGLE_ORDER_FAIL,
} from "../constants/orderActionTypes";

export const newOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case CREATE_ORDER_FAIL:
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

export const singleOrderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case SINGLE_ORDER_REQUEST:
      return {
        orders: [],
        loading: true,
      };

    case SINGLE_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case SINGLE_ORDER_FAIL:
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
