import {
  CREATE_SALE,
  ADD_BOOK_TO_SALE,
  DISPLAY_BOOK_IN_SALE,
  DISPLAY_ASSOCIATION,
  SET_LIST_STATUS,
  CLEAR_LIST,
  SET_LISTS
} from '../types';

const iState = {
  currentSale: {},
  currentSaleWithBooks: { items: [] },
  displaySale: false,
  listStatus: false,
  lists: []
};

const SaleReducer = (state = iState, action) => {
  switch (action.type) {
    case CREATE_SALE:
      return { ...state, currentSale: action.payload };
    case ADD_BOOK_TO_SALE:
      return { ...state };
    case DISPLAY_BOOK_IN_SALE:
      return { ...state, currentSaleWithBooks: action.payload };
    case DISPLAY_ASSOCIATION:
      return { ...state, displaySale: action.payload };
    case SET_LIST_STATUS:
      if (state.listStatus === false) {
        return { ...state, listStatus: true };
      } else {
        return { ...state, listStatus: false };
      }
    case SET_LISTS:
      return { ...state, lists: action.payload };
    case CLEAR_LIST:
      return { ...state, currentSaleWithBooks: { items: [] } };
    default:
      return { ...state };
  }
};

export default SaleReducer;
