//import React, { useState,useEffect } from 'react';
//import { Link } from "react-router-dom";
//import { loginUser } from "../api/index";
//import { toast } from "react-toastify";
//import LoggedUser from './LoggedUser';
//import Admin from './Admin';
//import React, { useState } from 'react';
/* import "./Login.css";


import React, { useState, useEffect } from 'react';

//const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
//const COHORT_NAME = '2209-FTB-ET-WEB-PT';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [token, setToken] = useState('');
  async function loginUser(event){
      event.preventDefault()
      
      try{
        const response = await fetch("https://strangers-things.herokuapp.com/api/",{
          method:"POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            user:{
              username:username,
              password:password
            }
        })

    })
         let result = await response.json(
          console.log(result)
         )
      }catch(err){
        console.log(err)
    }
      
  }
 return(
  <form onSubmit={(event)=>loginUser
  (event)}>
    <label>Username:</label>
    <input type="text" value=
    {username} onChange={(event)=>setUsername(event.target.value)}>
    </input>
    <label>Password:</label>
    <input type="password" value={password} onChange=
    {(event)=>setPassword(event.target.value)}>
    </input>
    <button type="submit">Login</button>
  </form>

 );
}; */
/* import "./Login.css";
import React, { useState, useEffect } from "react";
//import React from 'react';
//import { redirect } from 'react-router-dom';
import {Link} from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
    setPassword('');
    setUsername('');
  }, []);

  
  async function handleLoginBtn() {
    const body = JSON.stringify({
      user:{
        username:props.username,
        password:props.password,
      },
    });

  //make api request
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/users/login",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body,
    }
  );

  const json = await response.json();
  console.log(json);
  if(json.data.token){
    localStorage.setItem("jwt",json.data.token);
  }
}
return(
  <div className="login-container">
    <h1 className="login-header"> Login </h1>
    <form onSubmit={handleLogin}>
    <input
    className="usernameLogin"
    type="text"
    required
    placeholder='enter your username'
    onChange={(e) => props.setUsername(e.target.value)}
    />
    <input
    placeholder="enter your password"
    onChange={(e) => props.setPassword(e.target.value)}
    />
    <button className="loginButton" onClick={handleLoginBtn}>
      Login
      </button>
      </form>

     <div className="register-link-container">
      <h3>Not Yet a User?</h3>
      <Link to="/SignUp" className="link">
        Sign up
      </Link>
      <div id="loginMessage">{loginMessage}
       </div>
     </div>
  </div>
);

}

export default Login; */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/index";
import { toast } from "react-toastify";
import "./Login.css";
//import Logout from "./Logout";


const Login = ({ setUser, setIsLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loginMessage, setLoginMessage] = useState("");
  
    async function handleLogin(e) {
      e.preventDefault();
      const { token, user } = await loginUser(
        username,
        password,
        setLoginMessage
      );
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
      localStorage.removeItem("username");
      localStorage.setItem("username", username);
      setUsername("");
      setPassword("");
      setUser(user);
      setIsLoggedIn(true);
  
      if (token) {
        toast.success("Login Successful");
        navigate("/Products");
      } else {
        toast.error("Login Failed");
        navigate("/Login");
      }
    }
  
    return (
      <div className="login-container">
        <h1 className="login-header">Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <input
            className="usernameLogin"
            type="text"
            required
            placeholder="username *"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
  
          <input
            className="passwordLogin"
            type="password"
            required
            placeholder="password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" type="submit">
            Login
          </button>
        </form>
  
        <div className="register-link-container">
          <h3>Not a User Yet? </h3>
          <Link to="/SignUp" className="link">
            Sign up
          </Link>
          <div id="loginMessage">{loginMessage}</div>
        </div>
      </div>
    );
  };
  
export default Login;
