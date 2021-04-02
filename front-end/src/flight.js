import React, { useState, useEffect } from "react";
import "./flight.css";

// variables
let [location, setLocation] = useState();
let [destination, setDestination] = useState();

// functions
function book(){
    window.open("https://www.skyscanner.com/", "_blank");
}

function Flight(props) {
    return (
        <article className="flight">
                <h4 className="left">Flight #{props.details.flight}</h4>
                <p className="loc"><b>From: {location}</b></p>
                <p className="loc"><b>To: {destination}</b></p>
                <h4 className="right">Price: {props.details.price}</h4>
                <button button onClick={e => book(e)} className="fs_button">BOOK</button>
        </article>
    );
}

export default Flight;