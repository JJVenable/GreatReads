import { BASE_URL } from '../globals';
import axios from 'axios';

/// get product details by book id
export const GetProductDetailsService = async (bookId) => {
  try {
    const res = await axios.get(`${BASE_URL}/books/details/${bookId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

/// get all product reviews
// this will eventually need to be get all product reviews by book id (regardless of user id)
export const GetBookWithAllReviewsService = async (bookId) => {
  try {
    const res = await axios.get(`${BASE_URL}/books/reviews/${bookId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// create review by book id and user id
export const CreateReviewService = async (userId, bookId, body) => {
  try {
    const res = await axios.post(`${BASE_URL}/reviews/${userId}/${bookId}`, body);
    return res.data;
  } catch (error) {
    throw error;
  }
};
