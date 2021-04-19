import React, { useState, useEffect } from 'react'
import './login.css'

const login = () => {

return (
  <div className="login">
    <label>
            <input
              name="login"
              type="text"
              placeholder="Enter your login"              
            />
    </label>
    <label>
            <input
              name="login"
              type="text"
              placeholder="Enter your password"
            />
    </label>
  </div>
    );
  }
  export default login;