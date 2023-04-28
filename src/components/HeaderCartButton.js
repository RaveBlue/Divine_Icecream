import { useContext } from 'react';

import CartIcon from "./CartIcon";
import "./HeaderCartButton.css";
import CartContext from './CartContext';


const HeaderCartButton = (props) => {
  const CartCtx= useContext(CartContext);

 const numberOfCartItems = CartCtx.items.reduce((curNumber,item) => {
  return curNumber + item.amount;
 }, 0);

  return (
  <button className="button" onClick={props.onClick}>
    <span className="icon">
    <CartIcon/>
    </span>
    <span>Cart</span>
    <span className="badge">{numberOfCartItems}</span>
    
  </button>
  );
};

export default HeaderCartButton;