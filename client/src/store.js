import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import {
  productReducer,
  singleProductReducer,
} from "./reducers/ProductReducer";
import { cartReducer } from "./reducers/CartReducer";
import { userReducer } from "./reducers/UserReducer";

const reducer = combineReducers({
  products: productReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  user: userReducer,
});
let initState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
