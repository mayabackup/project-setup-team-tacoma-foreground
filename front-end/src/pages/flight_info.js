import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Flight from "./flight";
import "./css/flight_info.css";


const FlightInfo = ({ props }) => {

    let [location, setLocation] = useState();
    let [destination, setDestination] = useState();

    useEffect(() => {
      const getItems= async()=>{
      const resp= await axios.get("http://localhost:5000/flight_info")
     
        if(resp.data.message.location!==null){
          setLocation(resp.data.message.location)
        }
        else{
          setLocation("Data Not Entered" )
        }
        if(resp.data.message.destination!==null){
          setDestination(resp.data.message.destination)
        }
        
        else{
          setDestination("Data Not Entered")
        }
      } 
      getItems();
  
    }, [])

    const [data, setData] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const result = await axios.get("https://my.api.mockaroo.com/flight_api.json?key=64e1b920");

            console.log(result.data)
            console.log(result.data[1].price)
            console.log(result.data[2])  
            setData(result.data);     
        }
        fetchData();
    },[])
    
    return (
        <div id="flight_info">
            <div className="flex-container">
                <h2>Flight Information</h2>
                <div id = "to_from_fi">
                    <button className="fi_button">From: {location}</button>
                    <button className="fi_button">To: {destination}</button>
                </div>
                <div id="travel_req">
                    <h3>{destination}: Requirements for Travelers</h3>
                    <p id="travel_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="flights">
                    <section className="flight">
                        {data.map(item => (
                            <Flight key={item.id} details={item} />
                        ))}
                    </section>
                </div>
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