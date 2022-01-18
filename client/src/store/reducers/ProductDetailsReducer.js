import { GET_PRODUCT_DETAILS } from '../types';

const iState = {
  details: {}
};

const ProductDetailsReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS:
      console.log(action.payload);
      return { ...state, details: action.payload };
    default:
      return { ...state };
  }
};

export default ProductDetailsReducer;
