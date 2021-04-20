import React, { useState, useEffect } from 'react'
import './login.css'
import axios from "axios/lib/axios";

const Login = () => {
  //states
  const [username, setUser] = useState(null);
  const [password, setPass] = useState(null);

  const HandleSubmit = evt => {
    evt.preventDefault();
    localStorage.setItem('username',username)
    localStorage.setItem('password',password)

    let formData={
      username,
      password,
    }
    const post= async() => await axios
    .post('http://localhost:5000/login',formData)
    .then(() => console.log('Sent form data'))
    .catch(err => {
      console.error(err);
    });
    post()
  };

return (
  <div className="login">
    <div className = "space_between"></div>
    <div className = "space_between"></div>
    <h2>Welcome to Covid Travel Agent!</h2>
    <div className = "space_between"></div>
    <form  className="inputsLogin" onSubmit={HandleSubmit}>
    <label>
            <input className="username"
              type="text"
              placeholder="Enter your Username"     
              value={username}
              required
              onChange={e => setUser(e.target.value)}         
            />
    </label>
    <div className = "space_between"></div>
    <label>
            <input className="login"
              type="text"
              placeholder="Enter your password"
              value={password}
              required
              onChange={e => setPass(e.target.value)}
            />
    </label>
    <button button onClick='temp' id="margin3">Log in</button>
    <h3>Forgot Password?</h3>
    </form>
    <div className = "space_between"></div>
    <a href="./signup" target="_blank">Sign Up </a> 
  </div>
    );
  }
  export default Login;