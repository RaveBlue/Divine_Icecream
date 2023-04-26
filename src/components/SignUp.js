/* import React, { useState, useEffect } from 'react';
const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
//const COHORT_NAME = '2209-FTB-ET-WEB-PT';
const Signup = () => {
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

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username:username,
            password:password
          }
        })
      });
      console.log(response);
      const { data } = await response.json();
      console.log(data);
      setToken(data.token);

      localStorage.getItem('token', data.token);
      console.log('token', data.token);

      console.log('welcome!');
    } catch (error) {
      console.error(error);
      console.log('failed to sign up!');
    }
  };
  if (!token) {
    return (
      <div>
        <h1>Sign up here</h1>
        <form onSubmit={handleSubmit} className="sign-up-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <label htmlFor="username">Password</label>
          <input
            type="current-password"
            id="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  } else if (token) {
    return <h1>Thank you for signing up!</h1>;
  }
};

export default Signup;  */

/* import "./SignUp.css";
import React from 'react';
import { redirect } from 'react-router-dom';

function SignUp(props) {

  async function handleSignUpBtn() {
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
  <div>
    <h1> Sign up </h1>
    <input
    placeholder="enter your username"
    onChange={(e) => props.setUsername(e.target.value)}
    />
    <input
    placeholder="enter your password"
    onChange={(e) => props.setPassword(e.target.value)}
    />
    <button onClick={handleSignUpBtn}>Sign up</button>
  </div>
);

}

export default SignUp;
 */
import React, { useState } from "react";
import { registerUser } from "../api";
import "./SignUp.css";

const SignUp = (props) => {
  const { token, setToken, username, setUsername, password, setPassword} = props;
  
  const userSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await registerUser(username, password);
      if (result.message === "You're signed up!") {
        localStorage.setItem("token", result.token);

        console.log(result);
        setToken(result.token);
      }
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setUsername("");
      setPassword("");
    }
  };
  if(!token){

  return (
    <div>
      <h1 className="signup-header">Sign up</h1>
      <form className="sign-up-form" onSubmit={userSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
} else if (token){
  return <h1>Thank you for signing up!</h1>;
  }
  
};

export default SignUp;