import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// CSS
import "./top_locations.css";

// Page Output
const CovidInfo = ({ props }) => {
    //user info
    let citizenship = localStorage.getItem('citizenship');
    let location = localStorage.getItem('location');
    let airport = localStorage.getItem('airport');
    let continent = localStorage.getItem('continent');
    let reason = localStorage.getItem('reason');
    let name = localStorage.getItem('name');
    let email = localStorage.getItem('email');
    let destination = localStorage.getItem('destination');
    let destination_score = 100;
    let travel_date = localStorage.getItem('travel_date');
    let return_date = localStorage.getItem('return_date');

    if(citizenship=='undefined'){
        citizenship="Data not entered";
    }
    if(location=='undefined'){
        location="Data not entered";
    }
    if(airport=='undefined'){
        airport="Data not entered";
    }
    if(continent=='undefined'){
        continent="Data not entered";
    }
    if(reason=='undefined'){
        reason="Data not entered";
    }
    if(name=='undefined'){
        name="Data not entered";
    }
    if(email=='undefined'){
        email="Data not entered";
    }
    if(destination=='undefined'){
        destination="Data not entered";
    }
    if(travel_date=='undefined'){
        travel_date="Data not entered";
    }
    if(return_date=='undefined'){
        return_date="Data not entered";
    }

    //flight counter
    let count = 1;

    //page output HTML
    return (
        <div>
            <h2>Covid Information</h2>
            <div id = "to_from">
                <button className="button">From: {location}</button>
                <button className="button">To: {destination}</button>
            </div>
            
            <div>
                <ul id="nav">
                    <li><a href="./">Calculator</a></li>
                    <li><a href="./confirmation">Confirmation</a></li>
                    <li><a href="./top_locations">Top Locations</a></li>
                </ul>
            </div>
        </div>
      );
    };
    export default CovidInfo;