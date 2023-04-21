import "./AboutUs.css";
import React from 'react';
import Logodivine from './Logodivine.png';

const AboutUs = () => {
    return ( 
        <div className="main">
          {/* <h4 className="Name"> About Us </h4> */}
          <a href="http://localhost:3000/AboutUs" id="AboutUs" to="/AboutUs">
          </a>
          <div className="Divine">
            <div className="col">
               <h1 className="protein">Divine Protein Ice-cream</h1>
               <h2 className="about-title">About Us</h2>
               <h3 className="about1">Divine Protein Ice-cream. Your daily dose of healthy Ice-cream. </h3>
      
                <p className="describe1">
                  Our Ice-cream is for those looking to have a healthy lifestyle.<strong> Our mission</strong> is to help 
                  you eat healthy again, with amazing Ice-cream flavors high in protein.</p>
                 
                 <p className="describe2">We have many flavors to choose from. You can choose an Ice-cream flavor based on the 
              the calorie amount. These Ice-creams will help you reach your fitness goals! </p>
                 
                <p className="info"> You can email us at hello@divineicecream.com </p>
                <p className="otherinfo"><strong>Number:</strong> 333-3535-1313</p>
                <p className="location"><strong>Located:</strong> Texas </p>

                <div className="image-logo">
                  <img className="image-logo1"src={Logodivine} alt="Logo"/>
                </div>
              </div>
         </div>
      </div>
    )
}

export default AboutUs;
