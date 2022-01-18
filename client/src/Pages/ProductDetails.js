import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadProductDetailsAction } from '../store/actions/ProductDetailsAction';

const mapStateToProps = ({ detailState }) => {
  return { detailState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (id) => dispatch(LoadProductDetailsAction(id))
  };
};

const ProductDetails = (props) => {
  useEffect(() => {
    props.fetchDetails(props.match.params.book_id);
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
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
