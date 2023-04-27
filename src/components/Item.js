import "./Item.css";
import ItemForm from "./ItemForm";

const Item = props => {
 const price = `$${props.price.toFixed(2)}`;

  return (
  <li className="product">
    <div>
      <h3>{props.name}</h3>
      <div className="description">{props.description}</div>
      <div className="price">{price}</div>
       </div>
    <div>
       <ItemForm/>
    </div>
  </li>
  );
};

export default Item;