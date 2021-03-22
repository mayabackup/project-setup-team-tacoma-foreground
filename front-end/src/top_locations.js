import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Mock Data
import axios from "axios";
import Location from "./location";

// CSS
import "./top_locations.css";
// img
import img1 from "./img/sydney.jpg";
import img2 from "./img/paris.jpg";
import img3 from "./img/london.jpg";
import img4 from "./img/shanghai.jpg";
import img5 from "./img/nyc.jpg";

// Page
function TopLocations() {

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

    //functions
    function Sort() {
        console.log("placeholder");
    }

    //mock data
    useEffect(()=>{
        async function fetchData() {
            const result = await axios.get("https://my.api.mockaroo.com/total_locations.json?key=64e1b920"); 
            // set the state variable
            // this will cause a re-render of this component
            setData(result.data);  
            console.log(result.data[0]) 
            
            if(location=='undefined'){
                location=result.data[0].city;
                localStorage.setItem('location',location);
            }
        }
        fetchData();
    },[])

    //page output HTML
    return (
        <div id="top_locations" className="flex-container">
            <h2>My Top Locations</h2>
            <div id = "to_sort">
                <button className="button">From: {location}</button>
                <button className="button">
                    <label for="sort">Sort By: </label>
                    <select name="sort" id="sort">
                        <option onClick={e => Sort(e)} value="overall">Overall</option>
                        <option onClick={e => Sort(e)} value="vaccinated">% Vaccinated</option>
                        <option onClick={e => Sort(e)} value="cases"># Covid Cases</option>
                        <option onClick={e => Sort(e)} value="quarantine">Quarantine Period</option>
                        <option onClick={e => Sort(e)} value="death">Mortality Risk</option>
                        <option onClick={e => Sort(e)} value="price">Price</option>
                    </select>
                </button>
            </div>
            <div className= "locations">
                <section className="location">
                    {data.map(item => (<Location key={item.id} details={item} />))}
                </section>
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