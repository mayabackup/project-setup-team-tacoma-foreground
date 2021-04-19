import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./signin.css";
import { useHistory } from "react-router-dom";
const SignIn = ({ props }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [name, setName] = useState()

  const [incorrect, setIncorrect] = useState()
  const [feedback, setFeedback] = useState()
  let history = useHistory();

  function handleSubmit(evt){
      evt.preventDefault();
      console.log('entering to handle in',password,name,email,confirmPassword)
    if(
    password === confirmPassword){
      let formData={
        email,
        password,
        confirmPassword,
        name
      }
      console.log('entering to log in')
      setIncorrect(true)
      const post= async() => await axios
      .post('http://localhost:5000/signup',formData)
      .then(() => console.log('Sent form data'))
      .catch(err => {
        console.error(err);
      });
      post()
    
      history.push('/login')
      
    }else{
      setIncorrect(false)
    }

  }
  useEffect(() => {
    console.log("entering the use effect", incorrect)
    if(incorrect===false){
      console.log("entering the use effrrrect")
      setFeedback(
        <h1 className="bold-red">Passwords must match, password, name, and email must be length greater than 0 </h1>
      )
    }else{
      <div></div>
    }
  },[incorrect])

return(
<div>
  <form class="modal-content" onSubmit={handleSubmit}>
    <div class="container">
      <h1>Sign Up</h1>
      <p>Please provide credentials to create your personal account.</p>
      {feedback}
      <hr />
      <label><b>Name</b></label>
      <input
        type="text"
        placeholder="Your First and Last Name here"
        name="name"
        required
        onChange={e => setName(e.target.value)}
      />
      <label><b>Email</b></label>
      <input
        type="text"
        placeholder="Your Email here"
        name="email"
        required
        onChange={e => setEmail(e.target.value)}
      />

      <label><b>Password</b></label>
      <input
        type="password"
        placeholder="Please enter password"
        name="password"
        required
        onChange={e => setPassword(e.target.value)}
      />

      <label><b>Confirm password</b></label>
      <input
        type="password"
        placeholder="Repeat Password"
        name="Password-repeat"
        required
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <div>
        <input className="input-field" type="submit" value="Sign Up" />
      </div>
    </div>
  </form>

</div>
);
};
export default SignIn;