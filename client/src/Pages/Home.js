import NewSaleCard from '../components/NewSaleCard';
import ProductCard from '../components/ProductCard';
// import ProductLine from './components/ProductLine'
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { LoadProducts } from '../store/actions/ProductCardActions';

const mapStateToProps = ({ productCardState }) => {
  return { productCardState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(LoadProducts())
  };
};

const Home = (props) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    <div className="home-page">
      <div>Order</div>
      {/* <NewSaleCard /> */}
      <div className="product-cont">
        {props.productCardState.products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
