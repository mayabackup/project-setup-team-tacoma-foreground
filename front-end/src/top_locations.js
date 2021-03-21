import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// CSS
import "./top_locations.css";

// Page Output
const TopLocations = ({ props }) => {
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
            <h2>My Top Locations</h2>
            <div id = "to_sort">
                <button className="button">From: {location}</button>
                <div class="dropdown">
                    <button class="dropbtn">Overall</button>
                    <div class="dropdown-content">
                        <button>% Vaccinated</button>
                        <button># Cases</button>
                        <button>Quarantine Period</button>
                        <button>Mortality Risk</button>
                        <button>Price</button>
                    </div>
                </div>
            </div>
            <div className= "locations">
                <h6>Location #{count}: {destination}</h6>
                <h6>Score: {destination_score}</h6>
                <button className="cbutton">Covid Information</button>
            </div>
            <div>
                <ul id="nav">
                    <li><a href="./">Calculator</a></li>
                    <li><a href="./confirmation">Confirmation</a></li>
                </ul>
            </div>
        </div>
      );
    };
    export default TopLocations;