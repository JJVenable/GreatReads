import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PostBook } from '../store/actions/ProductCardActions';

const mapStateToProps = ({ productCardState }) => {
  return { productCardState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (body) => dispatch(PostBook(body))
  };
};

const SearchLine = (props) => {
  const { book } = props;

  const postBook = () => {
    console.log(book);
    const newBook = {
      name: book.volumeInfo.title,
      description: book.volumeInfo.description,
      author: book.volumeInfo.authors[0],
      price: 999,
      inventory: 10,
      image: book.volumeInfo.imageLinks.thumbnail
    };
    props.addBook(newBook);
  };

  return (
    <div className="searchSug" onClick={postBook}>
      <div>{book.volumeInfo.title}</div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchLine);
