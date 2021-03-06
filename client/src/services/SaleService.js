import client from './';

export const CreateSaleService = async (userid) => {
  try {
    const res = await client.post(`/sales/${userid}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const AddBookToSaleService = async (body) => {
  try {
    await client.post('/checkout/new', body);
  } catch (error) {
    throw error;
  }
};

export const DisplayBookInSaleService = async (saleId) => {
  try {
    const res = await client.get(`/sales/details/${saleId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const LoadListsService = async (userId) => {
  try {
    const res = await client.get(`sales/lists/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
