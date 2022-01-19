import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  LoadProductDetailsAction,
  LoadAllProductReviewsAction
} from '../store/actions/ProductDetailsAction';
import ReviewForm from '../components/ReviewForm';
import ReviewCard from '../components/ReviewCard';
import ReviewsContainer from '../components/ReviewsContainer';

const mapStateToProps = ({ detailState }) => {
  return { detailState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (id) => dispatch(LoadProductDetailsAction(id)),
    fetchAllReviews: () => dispatch(LoadAllProductReviewsAction())
  };
};

const ProductDetails = (props) => {
  useEffect(() => {
    props.fetchDetails(props.match.params.book_id);
    props.fetchAllReviews();
    // console.log(props.detailState.reviews);
  }, []);

  return (
    <div>
      <div>{props.detailState.details.name}</div>
      <div>By: {props.detailState.details.author}</div>
      <img src={props.detailState.details.image} />
      <div>Text Snippet: {props.detailState.details.textSnippet}</div>
      <div>Description: {props.detailState.details.description}</div>
      <div>Publisher: {props.detailState.details.publisher}</div>
      <div>Date Published: {props.detailState.details.publishedDate}</div>
      <ReviewForm />
      <ReviewsContainer reviews={props.detailState.reviews} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
