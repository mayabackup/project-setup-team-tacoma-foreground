import React, { useState, useEffect } from 'react'
import './css/login.css'
import axios from "axios/lib/axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  //states
  const [username, setUser] = useState(null);
  const [password, setPass] = useState(null);
  const [feedback, setFeedback] = useState();
  const [submit, setSubmit] = useState(false);

  let history = useHistory();

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
    setSubmit(true)
    history.push('/')
  };

  useEffect(() => {
    const getItems= async()=>{
     const resp= await axios.get("http://localhost:5000/login-error")
  
     if( resp.data.error){
      console.log('entering the feebback')
       setFeedback(
         <h3 className='error-message'>{resp.data.error}</h3>
       )
     }else{
      setFeedback(
        <h3></h3>
      )
      history.push('/')
     }
     
    } 
    getItems();

  }, [submit])
return (
  <div className="login">
    <div className = "space_between"></div>
    <div className = "space_between"></div>
    <h2>Welcome to Covid Travel Agent!</h2>
    <div className = "space_between"></div>
    <form  className="inputsLogin" onSubmit={HandleSubmit}>
      {feedback}
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
              type="password"
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