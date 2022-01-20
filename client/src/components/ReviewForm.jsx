import React from 'react';
import { connect } from 'react-redux';
import {
  NewReviewAction,
  CreateReviewAction
} from '../store/actions/ProductDetailsAction';
import "../styling/ReviewForm.css";

const mapStateToProps = ({ detailState }) => {
  return { detailState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (userId, bookId, review) => dispatch(CreateReviewAction(userId, bookId, review)),
    newReview: (form) => dispatch(NewReviewAction(form))
  };
};

const ReviewForm = (props) => {

  const handleChange = (event) => {
    props.newReview({
      ...props.detailState.newReview,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createReview(props.user.id, props.detailState.details.id, props.detailState.newReview);
  };

  return (
    <div>
      <div className="add-review-text">Add your own review: </div>
      <input type="text" name="comments" placeholder="Enter comment" value={props.detailState.newReview.comments} onChange={handleChange} />
      <input type="number" name="rating" placeholder="Enter rating (1-5)" value={props.detailState.newReview.rating} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit review</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
