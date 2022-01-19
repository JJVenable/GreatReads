import { connect } from "react-redux";
import React from "react";
import ProductLine from "./ProductLine";
import "../styling/NewSaleCard.css";

const mapStateToProps = ({ saleState }) => {
  return { saleState };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

function NewSaleCard(props) {
  return (
    <div className="new-sale-card">
      <p>Suggestion List #{props.saleState.currentSale.id}</p>
      {props.saleState.currentSaleWithBooks.items.map((product, index) => (
        <ProductLine 
        key={index}
        product={product} />

      ))}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSaleCard);
