import React from 'react';
import { connect } from 'react-redux';
import {
  NewReviewAction,
  CreateReviewAction
} from '../store/actions/ProductDetailsAction';

const mapStateToProps = ({ detailState }) => {
  return { detailState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (userId, bookId, review) => dispatch(CreateReviewAction(userId, bookId, review)),
    newReview: (form) => dispatch(NewReviewAction(form))
  };
};

const ReviewForm = (props) =>  {

  const handleChange = (event) => {
    props.newReview({
      ...props.detailState.newReview,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createReview(1, props.detailState.details.id, props.detailState.newReview);
    // console.log(props.detailState.details.id);
  };

  return (
    <div>
      <div>Add a review here: </div>
      <input type="text" name="comments" placeholder="Enter comment" value={props.detailState.newReview.comments} onChange={handleChange}/>  
      <input type="text" name="rating" placeholder="Enter rating" value={props.detailState.newReview.rating} onChange={handleChange}/>  
      <button onClick={handleSubmit}>Submit review</button>
        </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
