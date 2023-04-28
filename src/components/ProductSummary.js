import "./ProductSummary.css";
//import ShoppingCart from "./ShoppingCart";
import {Fragment} from 'react';

const ProductSummary = (props) => {
  return (
    <Fragment>
    <section className="summary">
      <h2>Delicious Ice-cream high in Protein!</h2>
      <p className="choose">
        Choose your favorite Ice-cream flavor from our selection of available protein Ice-cream
        and enjoy a delicious snack!
      </p>
     
      <p className="choose1">
        All our Ice-creams have high-quality ingredients.
      </p>
    </section>
    </Fragment>
  );
};

export default ProductSummary;