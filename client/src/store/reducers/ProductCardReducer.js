import { GET_PRODUCTS } from '../types';

const iState = {
  products: []
};

const ProductCardReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return { ...state };
  }
};

export default ProductCardReducer;
