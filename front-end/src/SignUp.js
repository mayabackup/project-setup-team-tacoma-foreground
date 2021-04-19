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
const[confirm, setConfirm] = usestate(null);


const submit = e => {
    e.preventDefault();
    localStorage.setItem('Name', name)
    localStorage.setItem('Email', email)
    localStorage.setItem('Password',password)
    localStorage.setItem('Confirm Password',confirm)
    let form = {
        name,
        email,
        password,
        confirm
    }
}



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
          <label>
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
    </div>
  );
};
export default SignUp;


