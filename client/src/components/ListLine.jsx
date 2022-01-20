import React from 'react';

export default function ListLine(props) {
  return (
    <div className="list-line">
      <img className="list-pic" src={props.book.image} />
      <div className="list-text">
        <div className='list-name'>{props.book.name}</div>
        <div className='list-author'>by {props.book.author}</div>
      </div>
    </div>
  )
}
