import { Fragment } from 'react';
import Cookiescream from "./Cookiescream.png";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
//import Products from "./Products";

const Header = props => {
  return (
  <Fragment>
   <header className="header">
   <h1> Divine Protein Ice-cream</h1>
   <HeaderCartButton/>
   <button> ShoppingCart</button>
   </header>
   
    <div className='main-image'>
    <img src={Cookiescream} alt="Ice-cream"/>
   </div>

  
  </Fragment>
  );
};

export default Header;