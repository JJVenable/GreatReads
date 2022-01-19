import { connect } from "react-redux";
import React from "react";
import ProductLine from "./ProductLine";
import "../styling/NewSaleCard.css";
import {
  ClearListAction,
  ToggleListStatusAction
} from '../store/actions/SaleAction';

const mapStateToProps = ({ saleState }) => {
  return { saleState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleListStatus: () => dispatch(ToggleListStatusAction()),
    clearList: () => dispatch(ClearListAction())
  };
};

function NewSaleCard(props) {
  const saveList = () => {
    props.toggleListStatus()
    props.clearList()
  }
  return (
    <div>
      {props.saleState.listStatus === true ? (
        <div>
          <div className="new-sale-card">
            <p>Suggestion List #{props.saleState.currentSale.id}</p>
              {props.saleState.currentSaleWithBooks.items.map((product, index) => (
                <ProductLine 
                  key={index}
                  product={product} 
                />
              ))}
            <button onClick={saveList}>Save List</button>
          </div>
        </div>
      ) : (null)}
    </div>

  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSaleCard);
