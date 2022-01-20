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

  let picture = '';
  try {
    picture = book.volumeInfo.imageLinks.thumbnail;
  } catch {
    picture =
      'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg';
  }

  let writer = '';
  try {
    writer = book.volumeInfo.authors[0];
  } catch {
    writer = 'unknown';
  }

  const postBook = () => {
    let snippet = '';
    try {
      snippet = book.searchInfo.textSnippet;
    } catch {
      snippet = null;
    }

    const newBook = {
      name: book.volumeInfo.title,
      description: book.volumeInfo.description,
      author: book.volumeInfo.authors[0],
      price: book.saleInfo.listPrice.amount,
      inventory: 5,
      image: book.volumeInfo.imageLinks.thumbnail,
      pageCount: book.volumeInfo.pageCount,
      publisher: book.volumeInfo.publisher,
      publishedDate: book.volumeInfo.publishedDate,
      apiId: book.id,
      categories: book.volumeInfo.categories,
      averageRating: book.volumeInfo.averageRating,
      ratingsCount: book.volumeInfo.ratingsCount,
      infoLink: book.volumeInfo.infoLink,
      textSnippet: snippet,
      maturityRating: book.volumeInfo.maturityRating,
      publicDomain: book.accessInfo.publicDomain
    };

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
          <img className="sugPics" src={picture} />
          <div className="sug-text">
            <div className="sug-name">{book.volumeInfo.title}</div>
            <div className="sug-author">{writer}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchLine);
