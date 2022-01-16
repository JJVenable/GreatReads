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

  let display = false;
  if (book.saleInfo.saleability === 'FOR_SALE') {
    display = true;
  }

  const postBook = () => {
    let listPrice = 8.99;
    if (book.saleInfo.saleability === 'FOR_SALE') {
      listPrice = book.saleInfo.listPrice.amount;
    }
    console.log(listPrice);
    const newBook = {
      name: book.volumeInfo.title,
      description: 'no description',
      author: book.volumeInfo.authors[0],
      price: listPrice,
      inventory: 10,
      image: book.volumeInfo.imageLinks.thumbnail
    };
    console.log(newBook);
    props.addBook(newBook);
  };

  return (
    <div>
      {display === true ? (
        <div className="sugCard" onClick={postBook}>
          <img className="sugPics" src={book.volumeInfo.imageLinks.thumbnail} />
          <div className="sug-text">
            <div className="sug-name">{book.volumeInfo.title}</div>
            <div className="sug-author">{book.volumeInfo.authors[0]}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchLine);
