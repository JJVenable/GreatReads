import React from 'react';
export default function Home({ history }) {
  return (
    <div className="home-container col">
      <h1>Welcome!</h1>
      <section className="welcome-signin">
        <button onClick={() => history.push('/signin')}>Sign In</button>
        <button onClick={() => history.push('/register')}>Sign Up</button>
      </section>
    </div>
  );
}
