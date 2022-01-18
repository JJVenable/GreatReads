import { GET_PRODUCT_DETAILS, GET_ALL_PRODUCT_REVIEWS } from '../types';
import {
  GetProductDetailsService,
  GetAllProductReviewsService
} from '../../services/ProductDetailsService';

/// load product details
export const LoadProductDetailsAction = (bookId) => {
  return async (dispatch) => {
    try {
      const details = await GetProductDetailsService(bookId);
      dispatch({
        type: GET_PRODUCT_DETAILS,
        payload: details
      });
    } catch (error) {
      throw error;
    }
  };
};

/// load product reviews
export const LoadAllProductReviewsAction = () => {
  return async (dispatch) => {
    try {
      const reviews = await GetAllProductReviewsService();
      dispatch({
        type: GET_ALL_PRODUCT_REVIEWS,
        payload: reviews
      });
    } catch (error) {
      throw error;
    }
  };
};
