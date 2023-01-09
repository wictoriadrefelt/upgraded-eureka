import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/ProductReducer";

const reducer = combineReducers({
  products: productReducer,
});
let initState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
