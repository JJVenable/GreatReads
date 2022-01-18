import { GET_PRODUCT_DETAILS } from '../types';
import { GetProductDetailsService } from '../../services/ProductDetailsService';

/// load product details
export const LoadProductDetailsAction = (id) => {
  return async (dispatch) => {
    try {
      const details = await GetProductDetailsService(id);
      dispatch({
        type: GET_PRODUCT_DETAILS,
        payload: details
      });
    } catch (error) {
      throw error;
    }
  };
};
