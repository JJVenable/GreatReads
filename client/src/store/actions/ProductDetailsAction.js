import {
  GET_PRODUCT_DETAILS,
  GET_ALL_PRODUCT_REVIEWS,
  CREATE_REVIEW,
  NEW_REVIEW
} from '../types';
import {
  GetProductDetailsService,
  GetAllProductReviewsService,
  CreateReviewService
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

// create review and add to database
export const CreateReviewAction = (userId, bookId, review) => {
  return async (dispatch) => {
    try {
      await CreateReviewService(userId, bookId, review);
      dispatch({
        type: CREATE_REVIEW,
        payload: review
      });
    } catch (error) {
      throw error;
    }
  };
};

// new review from form inputs
export const NewReviewAction = (form) => ({
  type: NEW_REVIEW,
  payload: form
});
