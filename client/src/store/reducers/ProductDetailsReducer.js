import {
  GET_PRODUCT_DETAILS,
  GET_ALL_PRODUCT_REVIEWS,
  CREATE_REVIEW,
  NEW_REVIEW
} from '../types';

const iState = {
  details: {},
  reviews: { reviews: [] },
  newReview: {
    comments: '',
    rating: ''
  }
};

const ProductDetailsReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS:
      // console.log(action.payload);
      return { ...state, details: action.payload };
    case GET_ALL_PRODUCT_REVIEWS:
      // console.log(action.payload);
      return { ...state, reviews: { reviews: action.payload } };
    case CREATE_REVIEW:
      console.log(action.payload);
      let newReviewList = state.reviews.reviews;
      newReviewList.push(action.payload);
      console.log(newReviewList);
      return {
        ...state,
        reviews: { ...state.reviews, reviews: newReviewList },
        newReview: {
          comments: '',
          rating: ''
        }
      };
    case NEW_REVIEW:
      console.log(action.payload);
      return {
        ...state,
        newReview: action.payload
      };
    default:
      return { ...state };
  }
};

export default ProductDetailsReducer;

// case CREATE_BOOK:
//   let newProductsList = state.products;
//   newProductsList.push(action.payload);
//   console.log(newProductsList);
//   return { ...state, products: newProductsList };
