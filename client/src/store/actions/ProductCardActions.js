import { GET_PRODUCTS, DELETE_PRODUCT } from '../types';
import {
  GetProducts,
  DeleteProductAction
} from '../../services/ProductCardService';

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

export const RemoveProduct = (id) => {
  return async (dispatch) => {
    try {
      await DeleteProductAction(id);
      dispatch({
        type: DELETE_PRODUCT,
        payload: id
      });
    } catch (error) {
      throw error;
    }
  };
};
