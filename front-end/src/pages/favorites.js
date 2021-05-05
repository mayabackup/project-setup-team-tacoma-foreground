import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./css/favorites.css";
import Location from "./location";

function Favorites() {
  
    const [data, setData] = useState([]);
    const [updatedData, setUpdatedData] = useState([]);
    const [location, setLocation] = useState([]);
    const [error, setError] = useState([]);
    useEffect(() => {
        const getItems= async()=>{
            const resp= await axios.get("http://localhost:5000/favorites")
        
          console.log(resp.data)
            //setLocation(val.user_location)
            if(resp.data.error!=null){
              setError(resp.data.error)
            }
            else{
              const val=resp.data.message
              console.log(val)
            const optionItems = Object.keys(resp.data.message).map((el) => ({
                cases: resp.data.message[el].ranking.cases,
                vaccination: resp.data.message[el].ranking.vaccination,
                mortality:resp.data.message[el].ranking.mortality,
                overall:resp.data.message[el].ranking.overall,

                date:resp.data.message[el].date,
                total_cases: resp.data.message[el].total_cases,
                total_vaccinations: resp.data.message[el].total_vaccinations,
                new_vaccinations_smoothed_per_million: resp.data.message[el].new_vaccinations_smoothed_per_million,
                continent:resp.data.message[el].continent,
                location:resp.data.message[el].location,
                Workplace:resp.data.message[el].Workplace,
                Internal:resp.data.message[el].Internal,
                International:resp.data.message[el].International,

              }));
              const updated = Object.keys(resp.data.update).map((el) => ({
                cases: resp.data.message[el].ranking.cases,
                vaccination: resp.data.message[el].ranking.vaccination,
                mortality:resp.data.message[el].ranking.mortality,
                overall:resp.data.message[el].ranking.overall,

                date:resp.data.message[el].date,
                total_cases: resp.data.message[el].total_cases,
                total_vaccinations: resp.data.message[el].total_vaccinations,
                new_vaccinations_smoothed_per_million: resp.data.message[el].new_vaccinations_smoothed_per_million,
                continent:resp.data.message[el].continent,
                location:resp.data.message[el].location,
                Workplace:resp.data.message[el].Workplace,
                Internal:resp.data.message[el].Internal,
                International:resp.data.message[el].International,

              }));
              console.log(optionItems)
            
            setData(optionItems);  
            setUpdatedData(updated)
        }  }

        getItems()
    
      }, [])

    return (
        <div id="fav_locations">
            <div className="flex-container">
                <h1>Favorite Locations</h1> 
                <div className= "favorites">
                  {error}
                <h2>Selected Countries</h2>
                {data.map(function(user,index){
                  return (
                    <div>
                     
                    <div>
                      <h2>{user.location}</h2>
                      <h4>Date Selected: {user.date}</h4>
                      <h4>Cases: {user.cases}</h4>
                      <h4>vaccination: {user.vaccination}</h4>
                      <h4>Mortality Risk: {user.mortality}</h4>
                      <h4>Overall Score: {user.overall}</h4>
                      <h4>Total Cases (as of the selected date): {user.total_cases}</h4>
                      <h4>Workplace Movement: {user.Workplace}</h4>
                      <h4>Internal Movement: {user.Internal}</h4>
                      <h4>International Movement: {user.International}</h4>
                      <br></br>
                    </div>
                    
                    </div>
                    )
                })}
                  <h2>Updated Information</h2>
                  {updatedData.map(function(user,index){
                  return (
                    <div>
                     
                    <div>
                      <h2>{user.location}</h2>
                      <h4>Date Selected: {user.date}</h4>
                      <h4>Cases: {user.cases}</h4>
                      <h4>vaccination: {user.vaccination}</h4>
                      <h4>Mortality Risk: {user.mortality}</h4>
                      <h4>Overall Score: {user.overall}</h4>
                      <h4>Total Cases (as of the selected date): {user.total_cases}</h4>
                      <h4>Workplace Movement: {user.Workplace}</h4>
                      <h4>Internal Movement: {user.Internal}</h4>
                      <h4>International Movement: {user.International}</h4>
                      <br></br>
                    </div>
                    
                    </div>
                    )
                })}

                </div>
            </div>
        </div>
      );
    };
    export default Favorites;