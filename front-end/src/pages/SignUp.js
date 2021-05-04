import React from "react";
import { useState, useEffect } from "react";
import "./css/SignUp.css";
import { useHistory } from "react-router-dom";
import axios from "axios/lib/axios";

const SignUp = ({ props }) => {

let history = useHistory();


const[name, setName] = useState(null);
const[email, setEmail] = useState(null);
const[password, setPassword] = useState(null);
const[confirm, setConfirm] = useState(null);

const[set, doSet] = useState(null);

const [incorrect, setIncorrect] = useState()
const [feedback, setFeedback] = useState()
const [error, setError] = useState(null)
const [next, setNext] = useState()

const handleChange = selected => {

  selected.preventDefault();
  console.log('entering to handle in',password,name,email,confirm)
if(
password === confirm){
  let formData={
    email,
    password,
    confirm,
    name
  }
  console.log('entering to log in')

  const post= async() => await axios
  .post('http://104.131.7.104:5000/signup',formData)
  .then((response) => {
    console.log('Sent form data 12',response.data.errors===null)
    if(response.data.errors===null){
      history.push('/login')
    }
    let errorHandle="ERROR: "
    for (let x in Object.keys(response.data.errors) ){
      console.log('Sent form data 12ff')
      errorHandle+=  response.data.errors[x].msg+  " in the " + response.data.errors[x].param+ " field "
    }
    setError(<h3 className="error-message">{errorHandle}</h3>)
   
})
  .catch(err => {
    console.error(err);
  })
  post()
  setIncorrect(true)
  
  
  
}else{
  setIncorrect(false)
}

}
useEffect(() => {
  console.log("entering the use effect", incorrect)
  if(incorrect===false){
    console.log("entering the use effrrrect")
    setFeedback(
      <h1 className="error-message">Passwords must match, password, name, and email must be length greater than 0 </h1>
    )
  }else{
    <div></div>
  }
},[incorrect])

useEffect(() => {

},[error])
return (
    <div class="SignUpCSS">
    
        
        <form  className="inputs" onSubmit={handleChange}>
          <h1>Sign Up</h1>
        <p>Please provide credentials to create your personal account.</p>
      {feedback}
      {error}
          <label>
            <input
              className="input-field"
              name="Name"
              type="text"
              placeholder="Enter Full Name"
              value={name}
              required
              onChange={e => setName(e.target.value)}
            />
          </label>
          <br></br>
          <label>
            <input
              className="input-field"
              name="Email"
              type="text"
              placeholder="Enter Email"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
              //onChange={e => setChoreDesc(e.target.value)}
            />
          </label>
          <br></br>
       
          <br></br>
          <label>
            <input
              className="input-field"
              name="Password"
              type="password"
              placeholder="Enter Your Password"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
              
            />
          </label>
          <br></br>
          <br></br>
          <label>
            <input
              className="input-field"
              name="Confirm"
              type="password"
              placeholder="Confirm Password"
              value={confirm}
              required
              onChange={e => setConfirm(e.target.value)}
            />
          </label>
          <br></br>
          <div>
        <input className="input-field" type="submit" value="Sign Up" />
      </div>
        </form>
      </div>

  );
};
export default SignUp;


