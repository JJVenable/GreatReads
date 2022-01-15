import { UpdateProduct } from '../actions/ProductCardActions';
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
      // console.log(adjustedProducts);
      return { ...state, products: adjustedProducts };
    ////////////////////// 
    case UPDATE_PRODUCT:
      let updatedProducts = state.products;
      // console.log(updatedProducts)
      // console.log(action.payload)
      let targetProductIndex = {}
      updatedProducts.map((product,index) => {
        if(product.id === action.payload.id) {
          targetProductIndex = index
        }
      })
      updatedProducts.splice(targetProductIndex, 1, action.payload)
      console.log(updatedProducts)
      return { ...state, products: updatedProducts }
    //////////////////////
    default:
      return { ...state };
  }
};

export default ProductCardReducer;
