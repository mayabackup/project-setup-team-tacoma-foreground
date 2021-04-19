import React, { useState, useEffect } from 'react'
import './login.css'

const login = () => {

return (
  <div className="login">
    <div className = "space_between"></div>
    <div className = "space_between"></div>
    <h2>Welcome to Covid Travel Agent!</h2>
    <div className = "space_between"></div>
    <label>
            <input className="login"
              type="text"
              placeholder="Enter your login"              
            />
    </label>
    <div className = "space_between"></div>
    <label>
            <input className="login"
              type="text"
              placeholder="Enter your password"
            />
    </label>
    <button button onClick='temp' id="margin3">Log in</button>
    <h3>Forgot Password?</h3>
    <button button onClick='temp' id="margin4">Create New Account</button>
  </div>
    );
  }
  export default login;