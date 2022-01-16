import { CREATE_SALE, ADD_BOOK_TO_SALE, DISPLAY_BOOK_IN_SALE } from '../types';
import {
  CreateSaleService,
  AddBookToSaleService,
  DisplayBookInSaleService
} from '../../services/SaleService';

export const CreateSaleAction = () => {
  return async (dispatch) => {
    try {
      //SaleService hardcoded to 1 below.
      const newSale = await CreateSaleService(1);
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

export const DisplayBookInSaleAction = (saleId) => {
  return async (dispatch) => {
    try {
      const saleWithBooks = await DisplayBookInSaleService(saleId);
      dispatch({
        type: DISPLAY_BOOK_IN_SALE,
        payload: saleWithBooks
      });
    } catch (error) {
      throw error;
    }
  };
};
