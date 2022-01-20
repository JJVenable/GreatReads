import { BASE_URL } from '../globals';
import axios from 'axios';

/// get all books
export const GetProducts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/books/all`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

/// delete book by id
export const DeleteProductService = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/books/delete/${id}`);
  } catch (error) {
    throw error;
  }
};

/// update book
export const UpdateProductService = async (id, body) => {
  try {
    const res = await axios.put(`${BASE_URL}/books/update/${id}`, body);
    return res.data[1][0];
  } catch (error) {
    throw error;
  }
};

// search external books
export const SearchExternalService = async (title) => {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20`
    );
    if (res.data.totalItems !== 0) {
      return res.data.items;
    } else {
      console.log('no results');
      return [];
    }
  } catch (error) {
    throw error;
  }
};

// post a book to the database
export const PostBookService = async (body) => {
  try {
    const res = await axios.post(`${BASE_URL}/books/post`, body);
    return res.data;
  } catch (error) {
    throw error;
  }
};
