import { GET_PRODUCT_CARDS } from '../types';
import { GetProductCards } from '../services/ProductCardService';

export const LoadProductCards = () => {
  return async (dispatch) => {
    try {
      const productCards = await GetProductCards();
      console.log(productCards);
      dispatch({
        type: GET_PRODUCT_CARDS,
        payload: productCards
      });
    } catch (error) {
      throw error;
    }
  };
};
