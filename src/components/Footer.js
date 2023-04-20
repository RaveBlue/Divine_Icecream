import React from 'react';
import "./Footer.css";
import {Outlet} from 'react-router-dom';

function Footer({links}) {
  return (
  
   <div className="footer-container">
      <footer className="footer">
    
        <h1> Shop </h1>
        <a className="Reviews" href="http://localhost:3000/Reviews" id="Reviews" to="/Reviews">
           Reviews
        </a>
        <h1> Contact Us </h1>
        <a className="contactus" href="http://localhost:3000/ContactUs" id="ContactUs" to="/ContactUs">
           Contact Us
        </a>
       <h1> Business </h1>
        <a className="about" href="http://localhost:3000/AboutUs" id="AboutUs" to="/AboutUs">
         About Us
       </a>
       <div className="copyright">
       <p>Copyright © 2023 by Divine,Inc. All rights reserved.
        </p>
        </div>
       <Outlet></Outlet>
      </footer>
   </div>
  );
}

export default Footer;
