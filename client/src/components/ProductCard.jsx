import { connect } from 'react-redux';
import '../styling/ProductCard.css'
import React, { useState, useEffect } from 'react';
import { RemoveProduct, UpdateProduct } from '../store/actions/ProductCardActions';
import { AddBookToSaleAction, DisplayBookInSaleAction, DisplayAssociationAction } from '../store/actions/SaleAction';
import zeroFive from '../images/stars/0.5.png'
import one from '../images/stars/1.png'
import oneFive from '../images/stars/1.5.png'
import two from '../images/stars/2.png'
import twoFive from '../images/stars/2.5.png'
import three from '../images/stars/3.png'
import threeFive from '../images/stars/3.5.png'
import four from '../images/stars/4.png'
import fourFive from '../images/stars/4.5.png'
import five from '../images/stars/5.png'


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
  const [stars, setStars] = useState(twoFive);

  // increase Read count
  const increaseLikes = (id) => {
    const newInventoryCount = props.product.inventory + 1
    const newBody = { "inventory": newInventoryCount }
    props.updateProduct(id, newBody)
  }

  // decrease Read count
  const decreaseLikes = (id) => {
    const newInventoryCount = props.product.inventory - 1
    const newBody = { "inventory": newInventoryCount }
    props.updateProduct(id, newBody)
  }


  /// buy product/ reduce inventory
  // NOW add to personal list
  const buyProduct = (id) => {
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

  ///// dtermine which picture to use for stars
  useEffect(() => {
    if (props.product.averageRating < 0.75) {
      setStars(zeroFive)
    } else if (props.product.averageRating < 1.25) {
      setStars(one)
    } else if (props.product.averageRating < 1.75) {
      setStars(oneFive)
    } else if (props.product.averageRating < 2.25) {
      setStars(two)
    } else if (props.product.averageRating < 2.75) {
      setStars(twoFive)
    } else if (props.product.averageRating < 3.25) {
      setStars(three)
    } else if (props.product.averageRating < 3.75) {
      setStars(threeFive)
    } else if (props.product.averageRating < 4.25) {
      setStars(four)
    } else if (props.product.averageRating < 4.75) {
      setStars(fourFive)
    } else {
      setStars(five)
    }
  }, []);


  //// delete Product 
  const delProduct = (id) => {

    props.deleteProduct(id)
  }
  return (
    <div className="product-card" >
      <img className='card-img' src={props.product.image} onClick={props.onClick} />
      <div className='card-name'>{props.product.name}</div>
      <div className='card-author'>by {props.product.author}</div>

      <div className='stars-line'>
        <img className='card-rating' src={stars} />
        <div>{props.product.ratingsCount}</div>
      </div>
      <div className='card-price'>${props.product.price}</div>
      <div className='buy-line'>

        <div className='card-quantity'>Likes: {props.product.inventory} </div>
        <div className='thumbs-line'>
          <i onClick={() => increaseLikes(props.product.id)} className="far fa-thumbs-up"></i>
          <i onClick={() => decreaseLikes(props.product.id)} className="far fa-thumbs-down"></i>
        </div>
        <div>

          {props.saleState.listStatus === true ? (
            <div>
              <button onClick={() => buyProduct(props.product.id)}>Add to Personal list</button>
            </div>
          ) : (null)}
        </div>
        <button onClick={() => delProduct(props.product.id)} className="remove-Button">Remove Book</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);