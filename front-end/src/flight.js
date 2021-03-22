import React, { useState, useEffect } from "react";
import "./flight.css";

// variables
let location = localStorage.getItem('location');
let destination = localStorage.getItem('destination');

// functions
function book(){
    window.open("https://www.skyscanner.com/", "_blank");
}

function Flight(props) {
    return (
        <article className="flight">
            <div className="flight_format" className="flex-container">
                <h4>Flight #{props.details.flight}</h4>
                <h4>From: {location}</h4>
                <h4>To: {destination}</h4>
                <h4>{props.details.price}</h4>
                <button button onClick={e => book(e)} className="fbutton">BOOK</button>
            </div>
      </article>
    );
}

export default Flight;