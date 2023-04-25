import React from "react";
import "./Home.css";
//import Footer from "./Footer";
import customerone from './customerone.jpg';
import customertwo from './customertwo.jpg';
import customerthree from './customerthree.jpg';
import customerfour from './customerfour.jpg';
import customerfive from './customerfive.jpg';
import customersix from './customersix.jpg';
import Cookies from './Cookies.png';
import Cookiescream from './Cookiescream.png';
import Cake from './Cake.png';
import PeanutButter from './PeanutButter.png';
import GreenTea from './GreenTea.png';
import Strawberry from './Strawberry.png';
//import Cone from './Cone.jpg';

//import techcrunch from './techcrunch.png';
//import businessinsider from './businessinsider.png';
//import newyorktimes from './newyorktimes.png';
//import forbes from './forbes.png';
//import usatoday from './usatoday.png';

const Home = () => {
  return (

    <div id="home-container">
      
          
      <div className="hero-text-box">
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
      <div className="hero-img-box">
      <div className="ice-cream-main">
            <img src={Cookies} alt="Cookies and Cream"/>
          </div>
        </div>
      </div>
    

      {/* <section class="section-featured">
      <div className="container">
       <h2 className="heading-featured-in">As featured in </h2>
       <div clasName="logos">
         <img src={techcrunch} alt="Techcrunch logo"/>
         <img src={businessinsider} alt="Business-Insider logo"/>
         <img src={newyorktimes} alt="New York Times logo"/>
         <img src={forbes} alt="Forbes logo"/>
         <img src={usatoday} alt="USA Today logo"/>
       </div>
     </div>
     </section> */}
     <section className="section-how ">
      <div className="container">
        <span className="subheading">Reasons to try this Ice-cream  </span>
        <h2 className="heading-secondary"> Your daily dose of healthy protein Ice-cream</h2>
         </div>
         <div className="container grid grid--2-cols grid--center-v">
           
           <div className="step-text-box">
             <p className="step-number">01</p>
             <h3 className="heading-tertiary"> (Blue Mint Chip)</h3>
             <p className="step-description">

             Never again waste time thinking about what to eat!  
             These ice-creams make sure you get all the nutrients and protein you need, 
             no matter what diet you follow!
           </p>
           </div>

            
           <div className="step-img-box">
             <img 
             src={Cookies}
             className="step-img"
             alt="Blue mint"/>
           </div>

           
           <div className="step-img-box">
            <img 
            src={Cookiescream}
            className="step-img"
            alt="Cookies and cream"
            />
          </div>
          <div className="step-text-box">
            <p className="step-number">02</p>
            <h3 className="heading-tertiary"> Healthier alternative to Ice-cream (Cookies and Cream)</h3>
            <p className="step-description">

              You can choose an Ice-cream flavor based on the flavor you want to try and based on calorie amount. 
          </p>
          </div>

       
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary"> Tell us what you like (Cake)</h3>
          <p className="step-description">

          
          This ice-cream makes sure you get all the nutrients and vitamins you need. We can recommend a 
          flavor to you depending on your likes and by products you buy from our shop. We also recommend ice-creams 
          based on fitness goals. 
        </p>
        </div>


        <div className="step-img-box">
          <img 
          src={Cake}
          className="step-img"
          alt="Cake Ice-cream"
          />
        </div>
       </div>
     </section>

     <section className="section-meals">
  <div className="container center-text">
    <span className="subheading">Ice-Cream</span>
    <h2 className="heading-secondary">
      Flavors of our healthy Ice-Cream
    </h2>
  </div>

<div className="container grid grid--3-cols margin-bottom-md">
  <div className="meal">
     <img src={PeanutButter} 
     className="meal-img"
     alt="Peanut Butter"
     
     />
     <div className="meal-content">
     <div className="meal-tags">
     <span className="tag">High In Protein</span>
     </div>
     <p className="meal-title">Peanut Butter Swirl </p>
     <ul className="meal-attributes">
       <li className="meal-attribute"> 
        <ion-icon name="flame-outline"></ion-icon><span>310 Calories</span>
       </li>


       <li className="meal-attribute"> Protein 20g </li>
       <li className="meal-attribute"> 4.9 rating (438)  </li>
     </ul>
    </div>
  </div>


  <div className="meal">
    <img src={GreenTea}
    className="meal-img"
    alt="Green tea"
    
    />
    <div className="meal-content">
    <div className="meal-tags">
    <span className="tag">High In Protein</span>
    </div>
    <p className="meal-title">Green Tea </p>
    <ul className="meal-attributes">
      <li className="meal-attribute"> 
       <ion-icon name="flame-outline"></ion-icon><span>310 Calories</span>
      </li>


      <li className="meal-attribute"> Protein 20g </li>
      <li className="meal-attribute"> 4.9 rating (437)  </li>
    </ul>
   </div>
 </div>



  <div className="meal"> 
    <img src={Strawberry}
  className="meal-img"
  alt="Strawberry Chocolate"
  
  />
  <div className="meal-content">
  <div className="meal-tags">
  <span className="tag">High In Protein</span>
  </div>
  <p className="meal-title"> Strawberry Chocolate</p>
  <ul className="meal-attributes">
    <li className="meal-attribute"> 
     <ion-icon name="flame-outline"></ion-icon><span>309 Calories</span>
    </li>


    <li className="meal-attribute"> Protein 20g </li>
    <li className="meal-attribute"> 4.9 rating (430)  </li>
  </ul>
 </div>
</div>

</div>

<div className="container all-recipes">
  <a className="link3" href="http://localhost:3000/Products">See all Ice-Cream Flavors &rarr;</a>
</div>


</section>

<section className="section-cta">
        <div className="container">
          <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first ice-cream tub for free!</h2>
            <p className="cta-text"> Healthy, tasty Ice-cream is waiting for you. Start eating well today. You can cancel or pause anytime. 
              And the first Ice-cream tub is on us!</p>

              <form className="cta-form" action="#">
                <div>
                <label for="full-name"> Full Name</label>
                <input 
                id="full-name" 
                type="text"  
                placeholder="Your name" 
                required 
                />
                </div>
                
                <div>
                <label for="email">Email address</label>
                <input 
                id="email" 
                type="email" 
                placeholder="me@example.com" 
                required 
                />
                </div>

              <div>
              <label for="select-where">Where did you hear from us?
              </label>
               <select id="select-where" required>
                 <option value="">Please choose one option:</option>
                 <option value="friends">Friends and family</option>
                 <option value="youtube">YouTube video</option>
                 <option value="youtube">Podcast</option>
                 <option value="youtube">Instagram ad</option>
                 <option value="youtube">Others</option>
               </select>
               </div>



                <button className="btn btn--form">Sign up now</button>

              </form>
          </div>
          <div 
          className="cta-img-box" 
          role="img" 
          aria-label="woman enjoying ice-cream"
          ></div>
          </div>
        </div>
      </section>


    </div>

  
    
   );
};

export default Home;