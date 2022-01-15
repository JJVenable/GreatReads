import { GET_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT } from '../types';
import { GetProducts, DeleteProductService, UpdateProductService } from '../../services/ProductCardService';

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
      await DeleteProductService(id);
      dispatch({
        type: DELETE_PRODUCT,
        payload: id
      });
    } catch (error) {
      throw error;
    }
  };
};

export const UpdateProduct = (id, body) => {
  return async (dispatch) => {
    try{
      const updatedBook = await UpdateProductService(id, body);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: updatedBook
      })
    } catch (error) {
      throw error;
    }
  }
}