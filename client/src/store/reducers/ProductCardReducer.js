import { GET_PRODUCT_CARDS } from '../types';

const initialState = {
  products: []
};

const GetProductCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_CARDS:
      return { ...state, products: action.payload };
    default:
      return { ...state };
  }
};

export default GetProductCardReducer;
