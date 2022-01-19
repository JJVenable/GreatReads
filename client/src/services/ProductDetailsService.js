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

// create review by book id and user id
// hardcoding the user id to be 1, this will change when we incorporate auth
export const CreateReviewService = async (userId, bookId, body) => {
  try {
    const res = await client.post(`/reviews/${userId}/${bookId}`, body);
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// Router.post('/:user_id/:book_id', controller.CreateReview);
