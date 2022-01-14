import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav.js'
import NewSaleCard from './components/NewSaleCard'
import ProductCard from './components/ProductCard'
import ProductLine from './components/ProductLine'
import Home from './pages/Home'
import About from './pages/About'


function App() {
  return (
    <div className="App">
      <Nav />
      <main >
        <Switch>
          <Route exact path = "/" component = { Home } />
          <Route exact path = "/about" component = { About } />
          
        </Switch>
      </main>
    </div>
  );
}

export default App;
