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

/// get product reviews by book id & user id (hard code as 1 for now)
// THIS NEEDS TO BE REVIEWED ONCE ROUTE ON BACK END IS CREATED
export const GetProductReviewsService = async (bookId) => {
  try {
    const res = await client.get(`/books/reviews/1/${bookId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
