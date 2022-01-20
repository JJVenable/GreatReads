import React from 'react';
import ListLine from './ListLine';

export default function ListCard(props) {
  return (

    <div className='sug-list-cont'>
      <div className='sug-list-title'>Suggestion List #{props.list.id}</div>
      {props.list.items.map((book) => {
        return <ListLine key={book.id} book={book} />
      })}
    </div>


  );
}
