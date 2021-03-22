import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// CSS
import "./top_locations.css";
// img
import img1 from "./img/sydney.jpg";
import img2 from "./img/paris.jpg";
import img3 from "./img/london.jpg";
import img4 from "./img/shanghai.jpg";
import img5 from "./img/nyc.jpg";

// Page
const TopLocations = ({ props }) => {

    //history
    let history = useHistory();

    //user info
    let citizenship = localStorage.getItem('citizenship');
    let location = localStorage.getItem('location');
    let airport = localStorage.getItem('airport');
    let continent = localStorage.getItem('continent');
    let reason = localStorage.getItem('reason');
    let name = localStorage.getItem('name');
    let email = localStorage.getItem('email');
    let destination = "";
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

    //variables
    let count = 1;

    //functions
    function covidInfo() {
        localStorage.setItem('destination',destination)
        history.push("/covid_info");
    }

    //page output HTML
    return (
        <div>
            <h2>My Top Locations</h2>
            <div id = "to_sort">
                <button className="button">From: {location}</button>
                <button className="button">
                    <label for="sort">Sort By: {"  "}</label>
                    <select name="sort" id="sort">
                        <option value="vaccinated">% Vaccinated</option>
                        <option value="cases"># Covid Cases</option>
                        <option value="quarantine">Quarantine Period</option>
                        <option value="death">Mortality Risk</option>
                        <option value="price">Price</option>
                    </select>
                </button>
            </div>
            <div className= "locations">
                <img className="img_loc" src={img1}></img>
                <h6>Location #{count++}: Sydney</h6>
                <h6>Score: {destination_score}</h6>
                <div classname= "position"><button onClick={e => covidInfo(e)} className="cbutton" id="sydney">Covid Information</button>
                </div>
                
            </div>
            <div className= "locations">
                <img className="img_loc" src={img2}></img>
                <h6>Location #{count++}: Paris</h6>
                <h6>Score: {destination_score}</h6>
                <div classname= "position"><button onClick={e => covidInfo(e)} className="cbutton" id="paris">Covid Information</button>
                </div>
            </div>
            <div className= "locations">
                <img className="img_loc" src={img3}></img>
                <h6>Location #{count++}: London</h6>
                <h6>Score: {destination_score}</h6>
                <div classname= "position"><button onClick={e => covidInfo(e)} className="cbutton" id="london">Covid Information</button>
                </div>
            </div>
            <div className= "locations">
                <img className="img_loc" src={img4}></img>
                <h6>Location #{count++}: Shanghai</h6>
                <h6>Score: {destination_score}</h6>
                <div classname= "position"><button onClick={e => covidInfo(e)} className="cbutton" id="shanghai">Covid Information</button>
                </div>
            </div>
            <div className= "locations">
                <img className="img_loc" src={img5}></img>
                <h6>Location #{count++}: New York City</h6>
                <h6>Score: {destination_score}</h6>
                <div classname= "position"><button onClick={e => covidInfo(e)} className="cbutton" id="nyc">Covid Information</button>
                </div>
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