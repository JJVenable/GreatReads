import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={(props) => <Home {...props} />} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/books/details/:book_id"
            component={(props) => <ProductDetails {...props} />}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
