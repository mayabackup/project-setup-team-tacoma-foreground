import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Mock Data
import axios from "axios";
import Flight from "./flight";

// CSS
import "./flight_info.css";


const FlightInfo = ({ props }) => {
  
    let history = useHistory();

    let [citizenship, setCitizenship] = useState();
    let [location, setLocation] = useState();
    let [airport, setAirport] = useState();
    let [continent, setContinent] = useState();
    let [reason, setReason] = useState();
    let [name, setName] = useState();
    let [email, setEmail] = useState();
    let [destination, setDestination] = useState();
    let [travel_date, setTravel_date] = useState();
    let [return_date, setReturn_date] = useState();

   
    let locationMap;;

    useEffect(() => {
      const getItems= async()=>{
      const resp= await axios.get("http://localhost:5000/flight_info")
     
        //Citizenship
        if ( resp.data.message.citizenship!=null){
          setCitizenship(resp.data.message.citizenship)
        }
        else{
          setCitizenship("Data Not Entered")
        }
        //Location
        if(resp.data.message.location!==null){
          setLocation(resp.data.message.location)
        }
        else{
          setLocation("Data Not Entered" )
        }
        //Aiport
        if(resp.data.message.airport!==null){
          setAirport(resp.data.message.airport)
        }
        
        else{
          setAirport("Data Not Entered")
        }
        //Continent
        if(resp.data.message.continent!==null){
          setContinent(resp.data.message.continent)
        }
        
        else{
          setContinent("Data Not Entered")
        }
        //Reason
        if(resp.data.message.reason!==null){
          setReason(resp.data.message.reason)
        }
        
        else{
          setReason("Data Not Entered")
        }
        //Name
        if(resp.data.message.name!==null){
          setName(resp.data.message.name)
        }
        
        else{
          setName("Data Not Entered")
        }
        //Email
        if(resp.data.message.email!==null){
          setEmail(resp.data.message.email)
        }
        
        else{
          setEmail("Data Not Entered")
        }
        //Destination
        if(resp.data.message.destination!==null){
          setDestination(resp.data.message.destination)
        }
        
        else{
          setDestination("Data Not Entered")
        }
        //Travel_date
        if(resp.data.message.travel_date!==null){
          setTravel_date(resp.data.message.travel_date)
        }
        
        else{
          setTravel_date("Data Not Entered")
        }
        //Return_date
        if(resp.data.message.return_date!==null){
          setReturn_date(resp.data.message.return_date)
        }
        
        else{
          setReturn_date("Data Not Entered")
        }

      } 
      
      getItems();
  
    }, [])

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