//import React, { useState,useEffect } from 'react';
//import { Link } from "react-router-dom";
//import { loginUser } from "../api/index";
//import { toast } from "react-toastify";
//import LoggedUser from './LoggedUser';
//import Admin from './Admin';
//import React, { useState } from 'react';
import "./Login.css";


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
};