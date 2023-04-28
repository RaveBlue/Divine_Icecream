
import './ShoppingCart.css';
import Modal from "./Modal";
import HeaderCartButton from './HeaderCartButton';
//import Header from "./Header";
import Navbar from "./Navbar";

const ShoppingCart = (props) => {
  const ShoppingCartItems =(
    <ul className="cart-items">
  {[{id:'c1',name:'Cookies and Cream', amount:2, price:4.50}].map((item) => ( 
  <li>{item.name}</li>
  ))}
   </ul>
  );

  return (
  <Modal onClose={props.onClose}>
    {ShoppingCartItems}
  <div className="total">
    <span>Total Amount</span>
    <span>12.99</span>
  </div>
  <div className="actions">
    <button className="button--alt" onClick={props.onClose}> Close</button>
    <button className="button">Order</button>
  </div>

  </Modal>

  );
};

export default ShoppingCart;