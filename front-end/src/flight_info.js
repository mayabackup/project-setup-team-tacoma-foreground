import React from "react";

import { useState, useEffect } from "react";
import "./flight_info.css";
import { useHistory } from "react-router-dom";

const FlightInfo = ({ props }) => {
    //states
    const [citizenship, setCitizenship] = useState();
    const [location, setLocation] = useState();
    const [airport, setAirport] = useState();
    const [continent, setContinent] = useState(null);
    const [reason, setReason] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
  
    let history = useHistory();

    //page output HTML
    return (
        <div>
            <div className="Header">
                <img src="./img/CovidTravelAgentLogo.jpg"></img>
                <h1>Covid Travel Agent</h1>
                <h2>Flight Infortmation</h2>
            </div>
            <div id= "Travel_Req">
            </div>
            <div className= "flights">
            </div>
            <div className= "flights">
            </div>
            <div className= "flights">
            </div>
            <div className= "flights">
            </div>
            <div className= "flights">
            </div>
            <div className= "flights">
            </div>
            <div className= "flights">
            </div>
            <div className= "flights">
            </div>
            <div className= "flights">
            </div>
            <div className= "flights">
            </div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom justify-content-center">
                    <ul class="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="#">Confirmation</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#">Top Locations</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#">Covid Data</a>
                        </li>
                    </ul>
                </nav>
        </div>
      );
    };
    export default FlightInfo;