import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PostBook, ClearBook } from '../store/actions/ProductCardActions';

const mapStateToProps = ({ productCardState }) => {
  return { productCardState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (body) => dispatch(PostBook(body)),
    clearBookList: () => dispatch(ClearBook())
  };
};

const SearchLine = (props) => {
  const { book, setCurSearch } = props;

  let display = false;
  if (book.saleInfo.saleability === 'FOR_SALE') {
    display = true;
  }

  const postBook = () => {
    const newBook = {
      name: book.volumeInfo.title,
      description: book.volumeInfo.description,
      author: book.volumeInfo.authors[0],
      price: book.saleInfo.listPrice.amount,
      inventory: 10,
      image: book.volumeInfo.imageLinks.thumbnail,
      pageCount: book.volumeInfo.pageCount,
      publisher: book.volumeInfo.publisher,
      publishedDate: book.volumeInfo.publishedDate,
      apiId: book.id,
      categories: book.volumeInfo.categories,
      averageRating: book.volumeInfo.averageRating,
      ratingsCount: book.volumeInfo.ratingsCount,
      infoLink: book.volumeInfo.infoLink,
      textSnippet: book.searchInfo.textSnippet,
      maturityRating: book.volumeInfo.maturityRating,
      publicDomain: book.accessInfo.publicDomain
    };
    console.log(newBook);
    props.addBook(newBook);
    setCurSearch({
      title: ``
    });
    props.clearBookList();
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
