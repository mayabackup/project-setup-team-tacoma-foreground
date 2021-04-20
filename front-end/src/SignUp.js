import React from "react";
import { useState, useEffect } from "react";
import "./SignUp.css";
import { useHistory } from "react-router-dom";
import axios from "axios/lib/axios";
import WindowedSelect from "react-windowed-select";

const SignUp = ({ props }) => {
    let selectedOption={
        value:"Enter necessary information"
};


const[name, setName] = useState(null);
const[email, setEmail] = useState(null);
const[password, setPassword] = useState(null);
const[confirm, setConfirm] = useState(null);

const[set, doSet] = useState(null);

const submit = e => {
    
    let formData = {
        name,
        email,
        password,
        confirm
    }


const post= async() => await axios
    .post('http://localhost:5000/signup',formData)
    .then(() => console.log('Loading'))
    .catch(err => {
        console.error(err);
    });
  post()
};
const handleChange = selected => {
  selected.preventDefault();

    doSet({ selected });
};

  
const setSubmit = e => {
    setSubmit(e.target.value);
};



return (
    <div class="SignUpCSS">
    <h1>Sign Up </h1>
        
        <form  className="inputs" onSubmit={submit}>
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
              type="text"
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
              type="text"
              placeholder="Confirm Password"
              value={confirm}
              required
              onChange={e => setConfirm(e.target.value)}
             
            />
          </label>
          <br></br>
          <input className="input-field" type="submit " value="SUBMIT" />
        </form>
      </div>

  );
};
export default SignUp;


