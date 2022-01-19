import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  LoadProductDetailsAction,
  LoadBookAndAllReviews
} from '../store/actions/ProductDetailsAction';
import ReviewForm from '../components/ReviewForm';
import ReviewCard from '../components/ReviewCard';
import ReviewsContainer from '../components/ReviewsContainer';

const mapStateToProps = ({ detailState }) => {
  return { detailState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (bookId) => dispatch(LoadProductDetailsAction(bookId)),
    fetchReviews: (bookId) => dispatch(LoadBookAndAllReviews(bookId))
  };
};

const ProductDetails = (props) => {
  useEffect(() => {
    props.fetchDetails(props.match.params.book_id);
    props.fetchReviews(props.match.params.book_id);
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
      <a href={props.detailState.details.infoLink} target="_blank">
        Buy this book
      </a>
      <ReviewForm user={props.user} />
      <ReviewsContainer reviews={props.detailState.reviews} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);