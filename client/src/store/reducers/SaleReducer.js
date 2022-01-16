import { CREATE_SALE, ADD_BOOK_TO_SALE } from '../types';

const iState = {
  currentSale: {},
  currentSaleWithBooks: {}
};

const SaleReducer = (state = iState, action) => {
  switch (action.type) {
    case CREATE_SALE:
      return { ...state, currentSale: action.payload };
    case ADD_BOOK_TO_SALE:
      return { ...state, currentSaleWithBooks: action.payload };
    default:
      return { ...state };
  }
};

export default SaleReducer;
