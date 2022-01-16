import { CREATE_SALE, ADD_BOOK_TO_SALE } from '../types';
import {
  CreateSaleService,
  AddBookToSaleService
} from '../../services/SaleService';

export const CreateSaleAction = () => {
  return async (dispatch) => {
    try {
      //SaleService hardcoded to 1 below.
      const newSale = await CreateSaleService(1);
      console.log(newSale);
      dispatch({
        type: CREATE_SALE,
        payload: newSale
      });
    } catch (error) {
      throw error;
    }
  };
};

export const AddBookToSaleAction = (body) => {
  return async (dispatch) => {
    try {
      await AddBookToSaleService(body);
      dispatch({
        type: ADD_BOOK_TO_SALE,
        payload: 'blank payload'
      });
    } catch (error) {
      throw error;
    }
  };
};
