
import './ShoppingCart.css';
import Modal from "./Modal";

const ShoppingCart = (props) => {
  const CartItems =(
    <ul className="cart-items">
  {[{id:'c1',name:'Green Tea', amount:2, price:4.50}].map((item) => ( 
  <li>{item.name}</li>
  ))}
   </ul>
  );

  return (
  <Modal onClose={props.onClose}>
    {CartItems}
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