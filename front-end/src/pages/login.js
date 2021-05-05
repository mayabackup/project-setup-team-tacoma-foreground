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
    .post('http://104.131.7.104:5000/login',formData)
    .then((response) => {
      console.log('Sent form data',response.data)
      if(response.data.error===true){
        setSubmit(true)
        history.push('/')

      }else{
        setFeedback(<div>
          <h3 className='error-message'>ERROR: wrong username or password</h3>
        </div>)
      }
    
    })
    .catch(err => {
      console.error(err);
    });
    post()
    
  };

  useEffect(() => {
    
      const getItems= async()=>{
      const resp= await axios.get("http://104.131.7.104:5000/login");
      console.log(resp.data)
        if(resp.data.user!=null && resp.data.user!=""){
          history.push('/')
        }
      }
      getItems()
  },)
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