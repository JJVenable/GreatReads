import { GET_PRODUCT_DETAILS, GET_PRODUCT_REVIEWS } from '../types';
import {
  GetProductDetailsService,
  GetProductReviewsService
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
export const LoadProductReviewsAction = (bookId) => {
  return async (dispatch) => {
    try {
      const reviews = await GetProductReviewsService(bookId);
      dispatch({
        type: GET_PRODUCT_REVIEWS,
        payload: reviews
      });
    } catch (error) {
      throw error;
    }
  };
};
