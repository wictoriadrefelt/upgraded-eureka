import { ADD_TO_CART } from "../constants/cartActionTypes";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const ifItemExists = state.cartItems.find(
        (i) => i.product === item.product
      );
      if (ifItemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === ifItemExists.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
