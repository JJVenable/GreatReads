import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import ProductLine from './ProductLine';


const mapStateToProps = ({ saleState }) => {
  return { saleState };
};

const mapDispatchToProps = (dispatch) => {
  return {
  
  };
};


function NewSaleCard(props) {


  return (
    <div className="new-sale-card">
      <p>Sale #{props.saleState.currentSale.id}</p>
      {props.saleState.currentSaleWithBooks.items.map((product) => (
          <ProductLine product={product} />
        ))}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSaleCard);