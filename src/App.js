
import './App.css';
import React, { useState } from 'react';
//import { redirect } from 'react-router-dom';
import { Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";
import "./components/AboutUs.css"
import ContactUs from "./components/ContactUs";
import Review from "./components/Review";
import Login from "./components/Login";
import LoggedUser from "./components/LoggedUser";
import SignUp from "./components/SignUp";
import Users from "./components/Users";
import Admin from "./components/Admin";
import AvailableProducts from "./components/AvailableProducts";
import ProductSummary from "./components/ProductSummary";
import Card from "./components/Card";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Header from "./components/Header";
//import Dashboard from "./components/Dashboard";

//import Register from "./components/Register";

//import LoggedUser from "./components/LoggedUser";
//import { Routes, Route } from 'react-router-dom';




function App() {
  //const[token,setToken] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ShoppingCartIsShown, setShoppingCartIsShown] = useState(false);

  const showShoppingCartHandler =() => {
    setShoppingCartIsShown(true);
  };

  const hideShoppingCartHandler = () => {
    setShoppingCartIsShown(false);
  };
   
   <Fragment>
      {ShoppingCartIsShown && <ShoppingCart onClose={hideShoppingCartHandler}/>}
      <Navbar onShowShoppingCart ={showShoppingCartHandler}/>
      <main>
        <Header/>
        <Products/>
      </main>
    </Fragment>
   
  
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
        <Route path="/ShoppingCart" element={<ShoppingCart/>}/> 
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Review" element={<Review/>}/>
        <Route 
        path="/Login" 
        element={
        <Login
            setUsername={setUsername}
            setPassword={setPassword}
            username={username}
            password={password}
            />
          }
        />

        <Route 
        path="/SignUp" 
        element={
        <SignUp
            setUsername={setUsername}
            setPassword={setPassword}
            username={username}
            password={password}
            />
           }
        />
        <Route path="/Users" element={<Users/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Modal" element={<Modal/>}/>
        <Route path="/Input" element={<Input/>}/>
        <Route path="/Item" element={<Item/>}/>
        <Route path="/Card" element={<Card/>}/>
        <Route path="/AvailableProducts" element={<AvailableProducts/>}/>
        <Route path="/ProductSummary" element={<ProductSummary/>}/>
        <Route path="/ItemForm" element={<ItemForm/>}/>
        <Route path="/Header" element={<Header/>}/>
        
        
        
        
        
       
        
        
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
  <Route path="/ShoppingCart" component={ShoppingCart} />
  <Route path="/ContactUs" component={ContactUs}/>
  <Route path="/Login" component={Login}/>
  <Route path="/LoggedUser" component={LoggedUser}/>
  <Route path="/SignUp" component={SignUp}/>
  <Route path="/Review" component={Review}/>
  <Route path="/Users" component={Users}/>
  <Route path="/Admin" component={Admin}/>
  <Route path="/Modal" component={Modal}/>
  <Route path="/Input" component={Input}/>
  <Route path="/Item" component={Item}/>
  <Route path="/Card" component={Card}/>
  <Route path="/AvailableProducts" component={AvailableProducts}/>
  <Route path="/ProductSummary" component={ProductSummary}/>
  <Route path="/ItemForm" component={ItemForm}/>
  
  
        

   
      
      </Router> 
  
      


   // </div>

  
    
  //);
//}

export default App;
