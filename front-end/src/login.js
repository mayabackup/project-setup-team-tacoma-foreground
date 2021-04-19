import React, { useState, useEffect } from 'react'
import './login.css'

const login = () => {
  //states
  const [login, setLogin] = useState(null);
  const [password, setPass] = useState(null);

  const handleSubmit = evt => {
    evt.preventDefault();
    localStorage.setItem('login',login)
    localStorage.setItem('password',password)

    let formData={
      login,
      password,
    }
    const post= async() => await axios
    .post('http://localhost:5000/',formData)
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
    <label>
            <input className="login"
              type="text"
              placeholder="Enter your login"     
              value={login}
              required
              onChange={e => setLogin(e.target.value)}         
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
    <button button onClick='temp' id="margin4">Create New Account</button>
  </div>
    );
  }
  export default login;