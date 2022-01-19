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
    // pass something in if 1 isn't hardcoded in saleAction.js
    postSale: (userId) => dispatch(CreateSaleAction(userId)),
    toggleListStatus: () => dispatch(ToggleListStatusAction())
  };
};

const Home = (props) => {
  console.log(props.user);
  let display = false;

  useEffect(() => {
    props.fetchProducts();
  }, []);

  const beginSale = () => {
    console.log('Favorites list started!');
    props.postSale(props.user.id);
    console.log(props.saleState.listStatus);
    props.toggleListStatus();
    console.log(props.saleState.listStatus);
  };

  return (
    <div className="home-page">
      <AddBooks />
      <button onClick={beginSale}>Make Suggestion List</button>
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
