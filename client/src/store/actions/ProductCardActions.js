import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH_EXTERNAL,
  CREATE_BOOK,
  CLEAR_BOOK_SEARCH
} from '../types';
import {
  GetProducts,
  DeleteProductService,
  UpdateProductService,
  SearchExternalService,
  PostBookService
} from '../../services/ProductCardService';

/// load products
export const LoadProducts = () => {
  return async (dispatch) => {
    try {
      const products = await GetProducts();
      dispatch({
        type: GET_PRODUCTS,
        payload: products
      });
    } catch (error) {
      throw error;
    }
  };
};

// remove Product
export const RemoveProduct = (id) => {
  return async (dispatch) => {
    try {
      await DeleteProductService(id);
      dispatch({
        type: DELETE_PRODUCT,
        payload: id
      });
    } catch (error) {
      throw error;
    }
  };
};
// update product
export const UpdateProduct = (id, body) => {
  return async (dispatch) => {
    try {
      const updatedBook = await UpdateProductService(id, body);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: updatedBook
      });
    } catch (error) {
      throw error;
    }
  };
};

// search external books
export const SearchExternal = (title) => {
  return async (dispatch) => {
    try {
      const books = await SearchExternalService(title);
      dispatch({
        type: SEARCH_EXTERNAL,
        payload: books
      });
    } catch (error) {
      throw error;
    }
  };
};

// post book to database
export const PostBook = (body) => {
  return async (dispatch) => {
    try {
      const book = await PostBookService(body);
      dispatch({
        type: CREATE_BOOK,
        payload: book
      });
    } catch (error) {
      throw error;
    }
  };
};

// clear book search
export const ClearBook = () => ({
  type: CLEAR_BOOK_SEARCH,
  payload: []
});
