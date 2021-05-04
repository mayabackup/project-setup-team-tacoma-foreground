/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./css/location.css";
import axios from "axios/lib/axios";
import { useHistory } from "react-router-dom";
import { findFlagUrlByCountryName } from "country-flags-svg";


// variables
let i = 1;

// functions

function Location(props) {
    let history = useHistory();
    const [destination1, setDestination] = useState([]);
     
    const handleSubmit = evt => {
        evt.preventDefault();
        setDestination(props.details.location)
        let formData={
            destination:props.details.location
        }
        const post= async() => await axios
        .post('http://104.131.7.104:5000/top_locations',formData)
        .then(() => {
            console.log('Sent form data')
            history.push('/covid_info')
        }     
            )
        .catch(err => {
          console.error(err);
        });
        post()
      };
    i++;
    return (
        <article className="location">
                <img src={props.details.flag} alt="country flag"></img>
                <h4>Continent: {props.details.continent}</h4>
                <h4>Country: {props.details.location}</h4>
                <h4>Score: {props.details.score.toFixed(3)}</h4> 
                <button button onClick={handleSubmit} className="l_button">Covid Information</button>  
              
        </article>
    );
}

export default Location;