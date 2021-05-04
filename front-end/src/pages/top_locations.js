import React from "react";
import { useState, useEffect } from "react";
import { findFlagUrlByCountryName } from "country-flags-svg";

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
            const resp= await axios.get("http://104.131.7.104:5000/top_locations")
        
            const val=resp.data.message.shift()
            setLocation(val.user_location)
            const optionItems = Object.keys(resp.data.message).map((el) => ({
                score: resp.data.message[el].ranking.overall,
                continent: resp.data.message[el].continent,
                location: resp.data.message[el].location,
                flag:findFlagUrlByCountryName(resp.data.message[el].location)

              }));
           
            setData(optionItems);  
        }  

        getItems()
    
      }, [])

    //page output HTML
    return (
        <div id="top_locations">
            <div className="flex-container">
                <h2>My Top Locations</h2>
                <div id = "to_sort_tl">
                    <button className="button_tl">From: {location}</button>
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