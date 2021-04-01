import React from "react";

import { useHistory } from "react-router-dom";
import "./confirmation.css";
import { useState, useEffect } from "react";
import axios from "axios";


//confirmation component
const Confirmation = ({ props }) => {
  let [citizenship, setCitizenship] = useState();
  let [location, setLocation] = useState();
  let [airport, setAirport] = useState();
 

    // get local variables for usr data
  //let citizenship = localStorage.getItem("citizenship");
  //let location = localStorage.getItem("location");
  let locationMap=location;
  //let airport = localStorage.getItem("airport");

  useEffect(() => {
    const getItems= async()=>{
     const resp= await axios.get("http://localhost:5000/confirmation")
     //console.log(resp.data.message)

    
        setCitizenship(resp.data.message.citizenship)
        setLocation(resp.data.message.location)
        setAirport(resp.data.message.airport)
    
    } 
    getItems();

  }, [])
  console.log(location==='undefined')
  if(citizenship==='undefined'){
    citizenship="Data not entered"
  }
  if(location==='undefined'){
    location="Data not entered"
    locationMap=''
  }
  if(airport==='undefined'){
    airport="Data not entered"
  }
  const loc =
    "https://maps.google.com/maps?q=" +
    locationMap +
    "&t=&z=13&ie=UTF8&iwloc=&output=embed";
  console.log(loc);
  let history = useHistory();

  // transfer pages after confirmation 
  function setConfirm() {
    history.push("/top_locations");
  }

  // go back to home
  function setHome() {
    history.push("/");
  }
  // return the component
  return (
    <div>
      <div className="user-data">
        <h1 className='page-title'>Confirmation</h1>
        <h3>
          Your Citizenship: <span className="user-input"> {citizenship}</span>
        </h3>
        <h3>
          Current Location: <span className="user-input"> {location}</span>
        </h3>
        <h3>
          Desired Departure Airport:{" "}
          <span className="user-input"> {airport}</span>
        </h3>
      </div>
      <div class="flex-container">
        <iframe
          title='map'
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
         
          src={loc}
        ></iframe>
      </div>
      <br></br>
      <div>
        <button onClick={e => setConfirm(e)} className="confirm" type="button">
          confirm and view results
        </button>
        <br></br>
        <button onClick={e => setHome(e)} className="back" type="button">
          return to calculator
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
