import client from './';
import axios from 'axios';

/// get all books
export const GetProducts = async () => {
  try {
    const res = await client.get('/books/all');
    return res.data;
  } catch (error) {
    throw error;
  }
};

/// delete book by id
export const DeleteProductService = async (id) => {
  try {
    await client.delete(`/books/delete/${id}`);
  } catch (error) {
    throw error;
  }
};

/// update book
export const UpdateProductService = async (id, body) => {
  try {
    const res = await client.put(`/books/update/${id}`, body);
    return res.data[1][0];
  } catch (error) {
    throw error;
  }
};

// search external books
export const SearchExternalService = async (title) => {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${title}`
    );
    console.log(res.data.items);
    return res.data.items;
  } catch (error) {
    throw error;
  }
};

// post a book to the database
export const PostBookService = async (body) => {
  try {
    const res = await client.post(`/books/post`, body);
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
