import {
  GET_PRODUCT_DETAILS,
  CREATE_REVIEW,
  NEW_REVIEW,
  GET_BOOK_WITH_ALL_REVIEWS
} from '../types';
const iState = {
  details: {},
  reviews: {
    reviews: {
      Reviews: []
    }
  },
  newReview: {
    comments: '',
    rating: ''
  }
};
const ProductDetailsReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS:
      return { ...state, details: action.payload };
    case GET_BOOK_WITH_ALL_REVIEWS:
      return { ...state, reviews: { reviews: action.payload } };
    case CREATE_REVIEW:
      let newReviewList = state.reviews.reviews.Reviews;
      newReviewList.push(action.payload);
      return {
        ...state,
        newReview: {
          comments: '',
          rating: ''
        }
      };
    case NEW_REVIEW:
      return {
        ...state,
        newReview: action.payload
      };
    default:
      return { ...state };
  }
};
export default ProductDetailsReducer;
