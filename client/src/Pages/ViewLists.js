import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { LoadListsAction } from '../store/actions/SaleAction';
import ListCard from '../components/ListCard';
import '../styling/MyList.css';

const mapStateToProps = ({ saleState }) => {
  return { saleState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLists: (userId) => dispatch(LoadListsAction(userId))
  };
};

function ViewLists(props) {
  useEffect(() => {
    props.fetchLists(props.user.id);
  }, []);

  return (
    <div>
      <div className="my-list">My Lists</div>
      <div className="sug-lists-cont">
        {props.saleState.lists.map((list) => {
          return <ListCard key={list.id} list={list} />;
        })}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewLists);
