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
                <button className="button">Location: {location}</button>
            </div>
            <div id = "to_sort">
                <h4>                                </h4>
            </div>
            <div id = "to_sort">
                <h4>Current number of cases:</h4>
                <button># Cases</button>
            </div>
            <div id = "to_sort">
                <h4>% of population vaccinated:</h4>
                <button>Vaccination</button>
            </div>
            <div id = "to_sort">
                <h4>Mortality risk:</h4>
                <button>Mortality</button>
            </div>
            <div id = "to_sort">
                <h4>Quarantine periods:</h4>
                <button>Quarantine Periods</button>
            </div>
            <div id = "to_sort">
                <h4>Governmental stringency index:</h4>
                <button>Gov stringency index</button>
            </div>
            <div id = "to_sort">
                <h4>                                                   </h4>
            </div>
            <div id= "travel_req">
                <h4> Workplace Closures:</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div id= "travel_req">
                <h4> International Travel Control:</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div id= "travel_req">
                <h4> Internal Movement Restrictions:</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div>
                <ul id="nav">
                    <li><a href="./top_locations">Top Locations</a></li>
                    <li><a href="./confirmation">Confirmation</a></li>
                </ul>
            </div>
        </div>
      );
    };
    export default CovidInfo;