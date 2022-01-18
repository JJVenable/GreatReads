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

  return <div>{props.detailState.details.name}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
