import client from './';

export const GetProducts = async () => {
  try {
    const res = await client.get('/books/all');
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteProductAction = async (id) => {
  try {
    await client.delete(`/books/delete/${id}`);
  } catch (error) {
    throw error;
  }
};

export const UpdateProductService = async (id,body) => {
  try {
    await client.put(`/books/update/${id}`);
  } catch (error) {
    throw error;
  }
};
