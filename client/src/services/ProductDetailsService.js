import client from './';
// import axios from 'axios';

/// get product details by book id
export const GetProductDetailsService = async (id) => {
  try {
    const res = await client.get(`/books/details/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
