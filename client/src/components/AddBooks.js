import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { SearchExternal } from '../store/actions/ProductCardActions';
import SearchLine from './SearchLine';
import '../styling/AddBook.css';

const mapStateToProps = ({ productCardState }) => {
  return { productCardState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchExternally: (name) => dispatch(SearchExternal(name))
  };
};

const AddBook = (props) => {
  const [curSearch, setCurSearch] = useState({
    title: ``
  });
  const [searchStatus, setSearchStatus] = useState('inactive');

  const changeSearch = () => {
    setSearchStatus('active');
  };

  const handleChange = (e) => {
    const newBook = { ...curSearch };
    newBook[e.target.id] = e.target.value;
    setCurSearch(newBook);
    console.log(newBook.title);
    if (newBook.title.length >= 5) {
      props.searchExternally(newBook.title);
    }
  };

  return (
    <div className="addBook">
      <div className="search-bar">
        <div className="dept">Books</div>
        <input
          className={searchStatus}
          onClick={changeSearch}
          type="text"
          name="title"
          value={curSearch.title}
          onChange={(e) => handleChange(e)}
          id="title"
          placeholder="add a book to the store"
          autoComplete="off"
        />
        <i className="fas fa-search"></i>
      </div>
      <div className="searchSugs">
        {props.productCardState.bookResults.map((book) => (
          <SearchLine book={book} setCurSearch={setCurSearch} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
