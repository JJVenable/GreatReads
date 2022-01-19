import NewSaleCard from '../components/NewSaleCard';
import ProductCard from '../components/ProductCard';
// import ProductLine from './components/ProductLine'
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { LoadProducts } from '../store/actions/ProductCardActions';
import { CreateSaleAction } from '../store/actions/SaleAction';

const mapStateToProps = ({ productCardState, saleState }) => {
  return { productCardState, saleState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(LoadProducts()),
    // pass something in if 1 isn't hardcoded in saleAction.js
    postSale: (userId) => dispatch(CreateSaleAction(userId))
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
  };

  return (
    <div className="home-page">
      <div></div>
      <button onClick={beginSale}>Make Suggestion List</button>
      <div>
        <NewSaleCard />
      </div>

      <div className="product-cont">
        {props.productCardState.products.map((product) => (
          <ProductCard
            product={product}
            onClick={() => props.history.push(`/books/details/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
