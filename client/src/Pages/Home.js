// import './App.css';
import NewSaleCard from '../components/NewSaleCard';
import ProductCard from '../components/ProductCard';
// import ProductLine from './components/ProductLine'
import { connect } from 'react-redux';
import React, { useEffect } from 'react';

function Home() {
  return (
    <div className="home-page">
      <p>This is the homepage, yo!</p>
      <NewSaleCard />
      <ProductCard />
    </div>
  );
}

export default Home;
