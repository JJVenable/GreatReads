import { GET_PRODUCT_DETAILS, GET_ALL_PRODUCT_REVIEWS } from '../types';

const iState = {
  details: {},
  reviews: { reviews: [] }
};

const ProductDetailsReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS:
      // console.log(action.payload);
      return { ...state, details: action.payload };
    case GET_ALL_PRODUCT_REVIEWS:
      console.log(action.payload);
      return { ...state, reviews: { reviews: action.payload } };
    default:
      return { ...state };
  }
};

export default ProductDetailsReducer;
