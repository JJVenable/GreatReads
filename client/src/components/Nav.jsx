import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import AddBook from "./AddBooks";
import "../styling/NavBar.css";

const Nav = () => {
  return (
    <header className="nav">
      <nav>
        <div>
          <Link to="/" className="upperNav">
            Home
          </Link>
          <Link to="/about" className="upperNav">
            About
          </Link>
        </div>

        <AddBook />
      </nav>
    </header>
  );
};

export default Nav;
