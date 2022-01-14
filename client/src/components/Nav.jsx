import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => {
  return(
    <header className="nav">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    </header>
  )
}

export default Nav