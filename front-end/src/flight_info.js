import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Mock Data
import axios from "axios";
import Flight from "./flight";

// CSS
import "./flight_info.css";

// Page Output
function FlightInfo() {

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
    const [data, setData] = useState([]);


    //mock data
    useEffect(()=>{
        async function fetchData() {
            const result = await axios.get("https://my.api.mockaroo.com/flight_api.json?key=64e1b920");

            console.log(result.data)
            console.log(result.data[1].price)
            console.log(result.data[2])  
            // set the state variable
            // this will cause a re-render of this component
            setData(result.data);     
        }
        fetchData();
    },[])

    //page output HTML
    return (
        <div id="flight_info" className="flex-container">
            <h2>Flight Information</h2>
            <div id = "to_from">
                <button className="button">From: {location}</button>
                <button className="button">To: {destination}</button>
            </div>
            <div id="travel_req">
                <h4>{destination}: Requirements for Travelers</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="flights">
                <section className="flight">
                    {data.map(item => (
                    <Flight key={item.id} details={item} />
                    ))}
                </section>
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