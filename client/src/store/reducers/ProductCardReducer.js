import { UpdateProduct } from '../actions/ProductCardActions';
import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH_EXTERNAL,
  CREATE_BOOK
} from '../types';

const iState = {
  products: [],
  bookResults: []
};

const ProductCardReducer = (state = iState, action) => {
  switch (action.type) {
    //////////////////////
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    //////////////////////
    case DELETE_PRODUCT:
      let adjustedProducts = state.products;
      console.log(adjustedProducts);
      let targetIndex = {};
      adjustedProducts.map((product, index) => {
        if (product.id === action.payload) {
          targetIndex = index;
        }
      });
      adjustedProducts.splice(targetIndex, 1);
      return { ...state, products: adjustedProducts };
    //////////////////////
    case UPDATE_PRODUCT:
      let updatedProducts = state.products;
      let targetProductIndex = {};
      updatedProducts.map((product, index) => {
        if (product.id === action.payload.id) {
          targetProductIndex = index;
        }
      });
      updatedProducts.splice(targetProductIndex, 1, action.payload);
      console.log(updatedProducts);
      return { ...state, products: updatedProducts };
    //////////////////////
    case SEARCH_EXTERNAL:
      return { ...state, bookResults: action.payload };
    /////////////////////
    case CREATE_BOOK:
      let newProductsList = state.products;
      newProductsList.push(action.payload);
      console.log(newProductsList);
      return { ...state, products: newProductsList };
    default:
      return { ...state };
  }
};

export default ProductCardReducer;
