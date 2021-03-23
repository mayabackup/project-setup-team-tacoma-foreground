import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Mock Data
import axios from "axios";

// CSS
import "./covid_info.css";

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
    const [data, setData] = useState([]);
    const [cases, setCases] = useState(0);
    const [vac, setVac] = useState(0);
    const [mort, setMort] = useState(0);
    const [quarantine, setQuarantine] = useState(0);
    const [gstringency, setGstringency] = useState(0);
    const [work, setWork] = useState("");
    const [travel, setTravel] = useState("");
    const [move, setMove] = useState("");

    //function
    function FlightInfo() {
        window.open("./flight_info","_self")
    }

    //mock data
    useEffect(()=>{
        async function fetchData() {
            const result = await axios.get("https://my.api.mockaroo.com/covid_info.json?key=64e1b920"); 
            // set the state variable
            // this will cause a re-render of this component
            setData(result.data);  
            setCases(result.data[0].case);
            setVac(result.data[0].vacination);
            setMort(result.data[0].mortality_risk);
            setQuarantine(result.data[0].quarantine_period);
            setGstringency(result.data[0].gov_stringency);
            setWork(result.data[0].work_closure);
            setTravel(result.data[0].travel_control);
            setMove(result.data[0].movement_restrictions);
        }
        fetchData();
    },[])

    
    //page output HTML
    return (
        <div id="covid_info">
            <div className="flex-container">
                <h2>Covid Information</h2>
                <div className = "space_between">
                    <button id="ci_button">Location: {destination}</button>
                </div>
                <div className = "space_between">
                    <h3>Current number of cases:</h3>
                    <button className="data"><b>{cases} cases</b></button>
                </div>
                <div className = "space_between">
                    <h3>% of population vaccinated:</h3>
                    <button className="data"><b>{vac} %</b></button>
                </div>
                <div className = "space_between">
                    <h3>Mortality risk:</h3>
                    <button className="data"><b>{mort} %</b></button>
                </div>
                <div className = "space_between">
                    <h3>Quarantine periods:</h3>
                    <button className="data"><b>{quarantine} days</b></button>
                </div>
                <div className = "space_between">
                    <h3>Governmental stringency index:</h3>
                    <button className="data"><b>{gstringency}</b></button>
                </div>
                <div className = "format_ci">
                    <h3> Workplace Closures:</h3>
                    <p className = "p_left_ci">{work}</p>
                </div>
                <div className = "format_ci">
                    <h3> International Travel Control:</h3>
                    <p className = "p_left_ci">{travel}</p>
                </div>
                <div className = "format_ci">
                    <h3> Internal Movement Restrictions:</h3>
                    <p className = "p_left_ci">{move}</p>
                </div>
                <button button onClick={e => FlightInfo(props)} id="margin">Flight Information</button>
            </div>
            <div>
                <ul id="nav">
                    <li><a href="./confirmation">Confirmation</a></li>
                    <li><a href="./top_locations">Top Locations</a></li>
                </ul>
            </div>
        </div>
      );
    };
    export default CovidInfo;