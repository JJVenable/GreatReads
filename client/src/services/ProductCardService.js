import client from './';

export const GetProductCards = async () => {
  try {
    const res = await client.get('/products');
    return res.data;
  } catch (error) {
    throw error;
  }
};
