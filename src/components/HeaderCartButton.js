import CartIcon from "./CartIcon";
import "./HeaderCartButton.css";

const HeaderCartButton = props => {
  return <button className="button">
    <span className="icon">
    <CartIcon/>
    </span>
    <span>Cart</span>
    <span className="badge">
      3
    </span>
  </button>
};

export default HeaderCartButton;