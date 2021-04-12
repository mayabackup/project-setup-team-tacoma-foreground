import React, { useState, useEffect } from "react";
import "./location.css";
import axios from "axios/lib/axios";
import { useHistory } from "react-router-dom";


// variables
let i = 1;

// functions

function Location(props) {
    let history = useHistory();
    const [destination1, setDestination] = useState([]);
    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(destination1)
        setDestination(props.details.location)
        console.log(destination1)
        let formData={
            destination:props.details.location
        }
        console.log(formData)
        const post= async() => await axios
        .post('http://localhost:5000/top_locations',formData)
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
                <img src={"https://picsum.photos/300/200?random=" + i}></img>
                <h4>Continent: {props.details.continent}</h4>
                <h4>Country: {props.details.location}</h4>
                <h4>Score: {props.details.score.toFixed(3)}</h4> 
                <button button onClick={handleSubmit} className="l_button">Covid Information</button>  
              
        </article>
    );
}

export default Location;