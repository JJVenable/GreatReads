import client from './';

/// get all books
export const GetProducts = async () => {
  try {
    const res = await client.get('/books/all');
    console.log(res.data);
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
export const UpdateProductService = async (id,body) => {
  try {
    const res = await client.put(`/books/update/${id}`, body);
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error;
  }
};
