import { GET_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT } from '../types';

const iState = {
  products: []
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
      console.log(adjustedProducts);
      return { ...state, products: adjustedProducts };
    ////////////////////// 
    case UPDATE_PRODUCT:
      let updatedProducts = state.products;
      console.log(updatedProducts)
      return { ...state }
    //////////////////////
    default:
      return { ...state };
  }
};

export default ProductCardReducer;
