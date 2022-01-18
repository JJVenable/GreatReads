import { connect } from 'react-redux';
import '../styling/ProductCard.css'
import React, { useEffect } from 'react';
import { RemoveProduct, UpdateProduct } from '../store/actions/ProductCardActions';
import { AddBookToSaleAction, DisplayBookInSaleAction, DisplayAssociationAction } from '../store/actions/SaleAction';


const mapStateToProps = ({ productCardState, saleState }) => {
  return { productCardState, saleState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(RemoveProduct(id)),
    updateProduct: (id, body) => dispatch(UpdateProduct(id, body)),
    addBookToSale: (body) => dispatch(AddBookToSaleAction(body)),
    getSaleWithBooks: (saleId) => dispatch(DisplayBookInSaleAction(saleId)),
    displayAssociation: () => dispatch(DisplayAssociationAction())
  };
};

function ProductCard(props) {
  // let price = (props.product.price * .01).toFixed(2)
  /// buy product/ reduce inventory
  const buyProduct = (id) => {
    const newInventoryCount = props.product.inventory - 1
    const newBody = { "inventory": newInventoryCount }
    props.updateProduct(id, newBody)
    props.addBookToSale({
      saleId: props.saleState.currentSale.id,
      bookId: id
    }).then(
      (onResolved) => {
        props.getSaleWithBooks(props.saleState.currentSale.id)
      },
      (onRejected) => {
        console.log('rejected')
      }
    ).then(
      (onResolved) => {
        props.displayAssociation()
      },
      (onRejected) => {
        console.log('rejected display association')
      }
    )

  }

  //// delete Product 
  const delProduct = (id) => {
    console.log('delete button clicked');
    props.deleteProduct(id)
  }
  return (
    <div className="product-card">
      <img className='card-img' src={props.product.image} />
      <div className='card-name'>{props.product.name}</div>
      <div className='card-author'>by {props.product.author}</div>
      <div className='card-price'>${props.product.price}</div>
      <img className='card-rating' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.libbyhellmann.com%2Fwp-content%2Fuploads%2F2015%2F11%2F5stars.png&f=1&nofb=1" />
      <div className='buy-line'>
        <div className='card-quantity'>Only {props.product.inventory} left in stock.</div>
        <button onClick={() => buyProduct(props.product.id)}>Buy Now!</button>
        <button onClick={() => delProduct(props.product.id)}>Remove Product</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);