import { connect } from 'react-redux';
import React, { useEffect } from 'react';


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
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSaleCard);