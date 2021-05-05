import React from "react";

import { useHistory } from "react-router-dom";
import "./css/confirmation.css";
import { useState, useEffect } from "react";
import axios from "axios";


//confirmation component
const Confirmation = ({ props }) => {
  let [entered, setEnterd] = useState(false);
  let [continents, setContinents] = useState();

  let locationMap;;
  useEffect(() => {
    const getItems= async()=>{
    const resp= await axios.get("http://localhost:5000/confirmation")
    if(resp.data.message!=null){

      console.log(resp.data.message)
      if(resp.data.message.continent!==null){
        setContinents(resp.data.message.continent)
      }
      
      else{
        setContinents("Data Not Entered")
      }
      setEnterd(resp.data.message.entered)
    } 
    else{
      setContinents("Data Not Entered")
    }
  }
  
    getItems();
    console.log(entered)
    if(entered===false){
      getItems();
    }

  }, [])

  function handelClick(){
    const selected={
      entered:true
    }
    //setConfirm(e)
    const post= async() => await axios
    .post('http://localhost:5000/confirmation',selected)
    .then(() => console.log('Sent form data'))
    .catch(err => {
      console.error(err);
    });
    post()
    history.push("/top_locations");
  }
  locationMap=continents;
  const loc =
    "https://maps.google.com/maps?q=" +
    locationMap +
    "&t=&z=13&ie=UTF8&iwloc=&output=embed";
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
        Desired Continent: <span className="user-input"> {continents}</span>
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
        <button onClick={handelClick} className="confirm" type="button">
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
