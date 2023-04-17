import React from "react";
import "./Home.css";
import customerone from './customerone.jpg';
import customertwo from './customertwo.jpg';
import customerthree from './customerthree.jpg';
import customerfour from './customerfour.jpg';
import customerfive from './customerfive.jpg';
import customersix from './customersix.jpg';
import Cookies from './Cookies.png';


const Home = () => {
  return (
    <div id="home-container">
      <h1 className="heading-primary">
        Healthy Protein Ice-cream that tastes delicious!
      </h1>
      <p className="description">
      Ice-cream that will help you eat healthy again. Amazing flavors and nutritional needs will be reached
            eating Ice-cream.
            We have sold 150,000+ Ice-cream tubs with many flavors!
      </p>

      <div className="delivered-tubs">
            <div className="delivered-imgs">
              <img src={customerone} 
              alt="Customer Photo" />

              <img src={customertwo} 
              alt="Customer Photo" />

              <img src={customerthree} 
              alt="Customer Photo" />

              <img src={customerfour}
              alt="Customer Photo" />

              <img src={customerfive}
              alt="Customer Photo" />

              <img src={customersix}
              alt="Customer Photo" />

            </div>
            <p className="delivered-text">
              <span>150,000+ </span>Ice-cream tubs sold!</p>
          </div>
      
      <h2 className="subheader">
        Protein Ice-cream 
      </h2>
      <div className="ice-cream-main">
            <img src={Cookies} alt="Cookies and Cream"/>
          </div>
    
    

     </div>
    
    
   );
};

export default Home;