import "./AvailableProducts.css";
import Card from "./Card";
import React from 'react';
import Item from "./Item";

const ICECREAM = [
{
  id:'m1',
  name:'Green Tea',
  description:'Green tea flavored ice cream.',
  price:4.50,
},
{
  id:'m2',
  name:'Strawberry Chocolate',
  description:'Vanilla ice cream swirled with strawberry sauce and swirls of chocolate.', 
  price:4.85,
},
{
  id:'m3',
  name:'Choco-loco',
  description:'Chocolate ice cream with fudge swirls and chocolate chunks.', 
  price:4.75,
},
{
  id:'m4',
  name:'Blue Mint Chip',
  description:'Mint ice cream with blue thin chocolate pieces and blue coloring.', 
  price:4.98,
},
{
  id:'m5',
  name:'Cookies and Cream',
  description:'Vanilla ice cream with cookie pieces.', 
  price:3.99,

},
{
  id:'m6',
  name:'Peanut Butter Swirl',
  description:'Vanilla ice cream with peanut butter swirls.', 
  price:4.99, 
},
{
  id:'m7',
  name:'Cake',
  description:'Cake-flavored ice cream with sprinkles.',
  price: 4.00,
},

];

const AvailableProducts =() => {
  const productsList =ICECREAM.map((product) => (
  <Item 
  key={product.id} 
  name={product.name} 
  description={product.description} 
  price={product.price}
  />
  ));

  return <section className="Products">
    <Card>
    <ul>{productsList}</ul>
    </Card>
  </section>
};

export default AvailableProducts;
  