import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// CSS
import "./flight_info.css";

// fetch some mock data about animals for sale
const response = await axios("https://my.api.mockaroo.com/flight_api.json?key=64e1b920");
// extract the data from the server response
const data = response.data;
// Page Output
const FlightInfo = ({ props }) => {

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
    let destination = localStorage.getItem('destination');
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
    function book(){
        window.open("https://www.skyscanner.com/", "_blank");
    }

    //page output HTML
    return (
        <div>
            <h2>Flight Information</h2>
            <div id = "to_from">
                <button className="button">From: {location}</button>
                <button className="button">To: {destination}</button>
            </div>
            <div id= "travel_req">
                <h4>{destination}: Requirements for Travelers</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className= "flights">
                <h4>Flight #{count++}</h4>
                <button button onClick={e => book(e)} className="fbutton">BOOK</button>
            </div>
            <div className= "flights">
                <h4>Flight #{count++}</h4>
                <button button onClick={e => book(e)} className="fbutton">BOOK</button>
            </div>
            <div className= "flights">
                <h4>Flight #{count++}</h4>
                <button button onClick={e => book(e)} className="fbutton">BOOK</button>
            </div>
            <div className= "flights">
                <h4>Flight #{count++}</h4>
                <button button onClick={e => book(e)} className="fbutton">BOOK</button>
            </div>
            <div className= "flights">
                <h4>Flight #{count++}</h4>
                <button button onClick={e => book(e)} className="fbutton">BOOK</button>
            </div>
            <div>
                <ul id="nav">
                    <li><a href="./confirmation">Confirmation</a></li>
                    <li><a href="./top_locations">Top Locations</a></li>
                    <li><a href="./covid_info">Covid Information</a></li>
                </ul>
            </div>
        </div>
      );
    };
    export default FlightInfo;