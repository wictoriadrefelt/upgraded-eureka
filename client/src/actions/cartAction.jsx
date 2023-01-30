import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_SHIPPING_INFO,
} from "../constants/cartActionTypes";
import axios from "axios";

export const addItemsToCart = (product) => async (dispatch, getState) => {
  // cartItems can be string or null
  let cartItems = localStorage.getItem("cartItems")
  cartItems = cartItems ? JSON.parse(cartItems) : null

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: product,
      quantity: (cartItems && cartItems.find(cartItem => cartItem.product._id === product._id)?.quantity + 1) || 1,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const decreaseItemsToCart = (product) => async (dispatch, getState) => {

  // cartItems can be string or null
  let cartItems = localStorage.getItem("cartItems")
  cartItems = cartItems ? JSON.parse(cartItems) : null

  let cartItem = cartItems ? cartItems.find(cartItem => cartItem.product._id === product._id) : undefined

  if(!cartItem || cartItem.quantity == 1) { return }

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: product,
      quantity: cartItem.quantity - 1,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItemFromCart = (product) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: product,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });
  localStorage.setItem(
    "shippingInfo",
    JSON.stringify(getState().cart.shippingInfo)
  );
};
