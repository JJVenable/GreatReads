// import { connect } from 'react-redux';
import '../styling/ProductCard.css'
import React, { useEffect } from 'react';

function ProductCard(props) {
  let price = (props.product.price * .01).toFixed(2)

  const buyProduct = () => {
    console.log('added to sale!')
  }

  return (
    <div className="product-card">
      <img className='card-img' src={props.product.image} />
      <div className='card-name'>{props.product.name}</div>
      <div className='card-author'>by {props.product.author}</div>
      <div className='card-price'>${price}</div>
      <img className='card-rating' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.libbyhellmann.com%2Fwp-content%2Fuploads%2F2015%2F11%2F5stars.png&f=1&nofb=1" />
      <div className='buy-line'>
        <div className='card-quantity'>Only {props.product.inventory} left in stock.</div>
        <button onClick={buyProduct}>Buy Now!</button>
      </div>
    </div>
  );
}

export default ProductCard;