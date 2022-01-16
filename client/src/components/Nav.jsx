import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import AddBook from './AddBooks';


const Nav = () => {
  return(
    <header className="nav">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <AddBook />
    </nav>
    </header>
  )
}

export default Nav