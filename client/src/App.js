import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Welcome from './Pages/Welcome';
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';
import ProductDetails from './Pages/ProductDetails';
import { CheckSession } from './services/Auth';
import ProtectedRoute from './components/ProtectedRoute';

function App(props) {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const checkToken = async () => {
    //If a token exists, sends token to localstorage to persist logged in user
    const user = CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  const handleLogOut = () => {
    //Reset all auth related state and clear localstorage
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route
            path="/signin"
            component={(props) => (
              <SignIn
                {...props}
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
                onClick={() => props.history.push('/register')}
              />
            )}
          />
          <Route path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/books/details/:book_id"
            component={(props) => <ProductDetails {...props} user={user} />}
          />
          {user && authenticated && (
            <ProtectedRoute
              authenticated={authenticated}
              user={user}
              path="/feed"
              component={(props) => <Home {...props} user={user} />}
            />
          )}
        </Switch>
      </main>
    </div>
  );
}

export default App;
