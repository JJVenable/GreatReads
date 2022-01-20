import {BASE_URL} from './index';
import axios from 'axios'

export const CreateSaleService = async (userid) => {
  try {
    const res = await axios.post(`${BASE_URL}/sales/${userid}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const AddBookToSaleService = async (body) => {
  try {
    await axios.post(`${BASE_URL}/checkout/new`, body);
  } catch (error) {
    throw error;
  }
};

export const DisplayBookInSaleService = async (saleId) => {
  try {
    const res = await axios.get(`${BASE_URL}/sales/details/${saleId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const LoadListsService = async (userId) => {
  try {
    const res = await axios.get(`${BASE_URL}/sales/lists/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
