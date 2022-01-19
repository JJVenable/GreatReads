import React, { useState } from 'react';
import { SignInUser } from '../services/Auth';

export default function SignIn(props) {
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await SignInUser(formValues);
    setFormValues({ email: '', password: '' });
    props.setUser(payload);
    props.toggleAuthenticated(true);
    props.history.push('/feed');
  };

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
        </form>
        <div>Don't have an account yet?</div>
        <button onClick={props.onClick}>Sign Up</button>
      </div>
    </div>
  );
}
