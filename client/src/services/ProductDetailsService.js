import client from './';
// import axios from 'axios';

/// get product details by book id
export const GetProductDetailsService = async (bookId) => {
  try {
    const res = await client.get(`/books/details/${bookId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

/// get all product reviews
// this will eventually need to be get all product reviews by book id (regardless of user id)
export const GetBookWithAllReviewsService = async (bookId) => {
  try {
    const res = await client.get(`/books/reviews/${bookId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// create review by book id and user id
export const CreateReviewService = async (userId, bookId, body) => {
  try {
    const res = await client.post(`/reviews/${userId}/${bookId}`, body);
    return res.data;
  } catch (error) {
    throw error;
  }
};
