import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_TO_CART) {
    if (!state.cart.find((item) => item.id === payload.id)) {
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }
  }

  if (type === REMOVE_FROM_CART) {
    const filtredCart = state.cart.filter((item) => item.id !== payload);
    return {
      ...state,
      cart: filtredCart,
    };
  }

  return state;
};

export default productReducer;
