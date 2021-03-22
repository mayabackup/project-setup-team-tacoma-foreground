import React, { useState, useEffect } from "react";
import "./location.css";

// variables
let i = 1;
let location = localStorage.getItem('location');
let destination = localStorage.getItem('destination');

// functions
function CovidInfo(props) {
    destination = props.details.city;
    localStorage.setItem('destination',destination);
    window.open("./covid_info","_self")
}

function Location(props) {
    i++;
    return (
        <article className="location">
            <div className="location_format">
                <img src={"https://picsum.photos/300/200?random=" + i}></img>
                <h4>Country: {props.details.country}</h4>
                <h4>City: {props.details.city}</h4>
                <h4>Score: {props.details.overall}</h4>
                <button button onClick={e => CovidInfo(props)} className="fbutton">Covid Information</button>
            </div>
        </article>
    );
}

export default Location;