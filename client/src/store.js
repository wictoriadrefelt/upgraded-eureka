import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import {
  productReducer,
  singleProductReducer,
} from "./reducers/ProductReducer";

const reducer = combineReducers({
  products: productReducer,
  singleProduct: singleProductReducer,
});
let initState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
