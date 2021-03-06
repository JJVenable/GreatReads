import NewSaleCard from '../components/NewSaleCard';
import ProductCard from '../components/ProductCard';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { LoadProducts } from '../store/actions/ProductCardActions';
import {
  CreateSaleAction,
  ToggleListStatusAction
} from '../store/actions/SaleAction';
import AddBooks from '../components/AddBooks';

const mapStateToProps = ({ productCardState, saleState }) => {
  return { productCardState, saleState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(LoadProducts()),
    postSale: (userId) => dispatch(CreateSaleAction(userId)),
    toggleListStatus: () => dispatch(ToggleListStatusAction())
  };
};

const Home = (props) => {
  let display = false;

  useEffect(() => {
    props.fetchProducts();
  }, []);

  const beginSale = () => {

    props.postSale(props.user.id);
    props.toggleListStatus();
   

  };

  return (
    <div className="home-page">
      <AddBooks />
      <div>
        {props.saleState.listStatus === false ? (
          <div>
            <button onClick={beginSale}>Make Suggestion List</button>
          </div>
        ) : null}
      </div>

      <div>
        <NewSaleCard />
      </div>

      <div className="product-cont">
        {props.productCardState.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => props.history.push(`/books/details/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
