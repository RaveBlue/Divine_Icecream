
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Shopping_Cart from "./components/Shopping_Cart";
import Footer from "./components/Footer";
import "./components/AboutUs.css"
import ContactUs from "./components/ContactUs";
import Review from "./components/Review";



function App() {
  return (
    //<div className="App">
      //<header className="App-header">
        
        //<p>
         // Edit <code>src/App.js</code> and save to reload.
        //</p>
       // <a
         // className="App-link"
         // href="https://reactjs.org"
         // target="_blank"
          //rel="noopener noreferrer"
        //>
         // Learn React
        //</a>
      //</header>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Shopping_Cart" element={<Shopping_Cart/>}/> 
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Review" element={<Review/>}/>
        
      </Routes>
      <Footer/>
    </Router>
    );
  }

      <Router>
      
  <Route exact path="/" component={Home} />
  <Route path="/AboutUs" component={AboutUs} />
  <Route path="/Products" component={Products} />
  <Route path="/Navbar" component={Navbar} />
  <Route path="/Shopping_Cart" component={Shopping_Cart} />
  <Route path="/ContactUs" component={ContactUs}/>

      
      </Router>
  
   


   // </div>

  
    
  //);
//}

export default App;
