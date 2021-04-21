import React from "react";
import { useState, useEffect } from "react";

// Mock Data
import axios from "axios";
import Location from "./location";

// CSS
import "./css/top_locations.css";

// Page
function TopLocations() {
    //covid data

    
    const [data, setData] = useState([]);
    const [location, setLocation] = useState([]);

    useEffect(() => {
        const getItems= async()=>{
            const resp= await axios.get("http://localhost:5000/top_locations")
        
            const val=resp.data.message.shift()
            setLocation(val.user_location)
            const optionItems = Object.keys(resp.data.message).map((el) => ({
                score: resp.data.message[el].ranking.overall,
                continent: resp.data.message[el].continent,
                location: resp.data.message[el].location,
              }));
            
            setData(optionItems);  
        }  

        getItems()
    
      }, [])

    //functions
    function Sort() {
        console.log("placeholder");
    }


    //page output HTML
    return (
        <div id="top_locations">
            <div className="flex-container">
                <h2>My Top Locations</h2>
                <div id = "to_sort_tl">
                    <button className="button_tl">From: {location}</button>
                    <button className="button_tl">
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
                <div className= "locations_tl">
                    <section className="location">
                        {data.map((user,index) => (<Location key={index} details={user} />))}
                    </section>
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