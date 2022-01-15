import { GET_PRODUCTS } from '../types';
import { GetProducts } from '../../services/ProductCardService';

export const LoadProducts = () => {
  return async (dispatch) => {
    try {
      const products = await GetProducts();
      console.log(products);
      dispatch({
        type: GET_PRODUCTS,
        payload: products
      });
    } catch (error) {
      throw error;
    }
  };
};
