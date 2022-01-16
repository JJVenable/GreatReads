import {
  CREATE_SALE,
  ADD_BOOK_TO_SALE,
  DISPLAY_BOOK_IN_SALE,
  DISPLAY_ASSOCIATION
} from '../types';

const iState = {
  currentSale: {},
  currentSaleWithBooks: { items: [] },
  displaySale: false
};

const SaleReducer = (state = iState, action) => {
  switch (action.type) {
    case CREATE_SALE:
      return { ...state, currentSale: action.payload };
    case ADD_BOOK_TO_SALE:
      return { ...state };
    case DISPLAY_BOOK_IN_SALE:
      // console.log(action.payload);
      return { ...state, currentSaleWithBooks: action.payload };
    case DISPLAY_ASSOCIATION:
      return { ...state, displaySale: action.payload };
    default:
      return { ...state };
  }
};

export default SaleReducer;
