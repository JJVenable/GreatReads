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
export const GetAllProductReviewsService = async () => {
  try {
    const res = await client.get(`/reviews/book_reviews`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// will need to add a service to create review by user id and book id
