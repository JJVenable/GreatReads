import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute({
  user,
  authenticated,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        user && authenticated ? (
          <Component {...props} /> // Render our chosen component if a user exists and they are authenticated
        ) : (
          <Redirect to="/signin" /> // Otherwise, use the Redirect component to return the user to the sign in screen
        )
      }
    />
  );
}
