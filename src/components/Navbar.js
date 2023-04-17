import React from 'react';
import { Link } from 'react-router-dom';
//import LoggedUser from "./LoggedUser";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home 
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Products" className="nav-link">
            Products 
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Shopping_Cart" className="nav-link">
            Cart 
          </Link>
        </li>


      </ul>
    </nav>
  );
};

export default Navbar;