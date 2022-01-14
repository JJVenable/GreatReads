import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => {
  return(
    <div className="nav">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    </div>
  )
}

export default Nav