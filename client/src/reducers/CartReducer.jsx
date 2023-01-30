import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_SHIPPING_INFO,
} from "../constants/cartActionTypes";

export const cartReducer = (
  state = { cartItems: [], shippingInfo: {} },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const ifItemExists = state.cartItems.find(
        (i) => i.product._id === item.product._id 
      );
      if (ifItemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product._id  === ifItemExists.product._id  ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_FROM_CART:
      console.log(action)
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product._id  !== action.payload._id),
      };
    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };
    default:
      return state;
  }
};
