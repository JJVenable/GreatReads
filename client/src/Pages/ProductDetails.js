import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  LoadProductDetailsAction,
  LoadBookAndAllReviews
} from '../store/actions/ProductDetailsAction';
import ReviewForm from '../components/ReviewForm';
import ReviewCard from '../components/ReviewCard';
import ReviewsContainer from '../components/ReviewsContainer';
import '../styling/DetailsPage.css';

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
      <div className="book-container">
        <img src={props.detailState.details.image} className="book-image" />
        <div className="title-author-description-container">
          <div className="book-title">
            <strong>{props.detailState.details.name}</strong>
          </div>
          <div className="book-author">
            by {props.detailState.details.author}
          </div>
          <div className="book-rating">
            Rating: {props.detailState.details.averageRating}
          </div>
          <div className="book-description">
            {props.detailState.details.description}
          </div>
          <div className="book-publisher">
            Published {props.detailState.details.publishedDate} by{' '}
            {props.detailState.details.publisher}
          </div>
        </div>
      </div>
      <div className="buy-book-container">
        <div>GET A COPY</div>
        <a
          href={props.detailState.details.infoLink}
          target="_blank"
          className="book-info-link"
        >
          Google Store ${props.detailState.details.price}
        </a>
      </div>
      <div className="review-container">
        <div>REVIEWS</div>
        <ReviewsContainer reviews={props.detailState.reviews} />
      </div>
      <div className="review-form-container">
        <ReviewForm user={props.user} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
