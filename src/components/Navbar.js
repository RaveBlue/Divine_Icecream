import React from 'react';
import { Link } from 'react-router-dom';
//import LoggedUser from "./LoggedUser";
import './Navbar.css';
import logo from './logo .png';
import {Fragment} from 'react';
//import ShoppingCart from './ShoppingCart';


const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo"/>
      </div>
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
        <Fragment>
        <li className="nav-item">
          <button className="button2" onClick={props.onClick}>
          <Link to="/ShoppingCart" className="nav-link">
            Cart 
          </Link>
         
          <button/>
          <span className="badge">3</span>
          </button>
        </li>
       </Fragment>

        <li className="nav-item">
          <Link to="/#" className="nav-link5">
            Welcome!
          </Link>
        </li>
        <li className="nav-item">
          <button type="button" className="login-button">
          <Link to="/Login" className="nav-link">
            Login
          </Link>
          </button>
        </li>
         <li className="nav-item">
          <button type="button" className="signup-button">
            <Link to="/SignUp" className="nav-link">
              Sign up
            </Link>
          </button>
 
         </li> 
        
      </ul>
    </nav>
  );
};

export default Navbar;