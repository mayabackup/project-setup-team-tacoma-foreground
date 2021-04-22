import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./css/favorites.css";
import Location from "./location";

function Favorites() {
  
    const [data, setData] = useState([]);
    const [location, setLocation] = useState([]);

    useEffect(() => {
        const getItems= async()=>{
            const resp= await axios.get("http://localhost:5000/favorites")
        
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

    return (
        <div id="fav_locations">
            <div className="flex-container">
                <h2>Favorite Locations</h2> 
                <div className= "favorites">
                        {data.map((user,index) => (<Location key={index} details={user} />))}
                </div>
            </div>
        </div>
      );
    };
    export default Favorites;