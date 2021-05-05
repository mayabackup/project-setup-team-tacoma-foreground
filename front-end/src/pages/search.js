import React from "react";

import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Location from "./location";
import "./css/search.css";

const Search= ({ props }) => {
    const [country, setCountry] = useState();
    const [data, setData] = useState(null);
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {       
    
    },[] )
    function  handleSubmit(event){
        event.preventDefault()
        const formData={
            country
        }
        const post= async() => await axios
        .post('http://localhost:5000/search',formData)
        .then(function x(response){

            setData(response.data.message)
            if(response.data.message===null || response.data.unknown===true){
                setFeedback(<div className='error-message'><h2>Country Not Found</h2></div>)
            }
            
            else if(response.data.message!=null){
            setFeedback(
                <div> 

                <div className="flex-container">
                <h2>Covid Information</h2>
                <div className = "space_between">
                    <button id="ci_button">Location: {country}</button>
                </div>
                <div className = "space_between">
                    <h3>Total number of cases:</h3>
                    <button className="data"><b>{response.data.message.data.total_cases} cases</b></button>
                </div>
                <div className = "space_between">
                    <h3>Population Vaccinated:</h3>
                    <button className="data"><b>{response.data.message.data.total_vaccinations}</b></button>
                </div>
                <div className = "space_between">
                    <h3>Mortality risk:</h3>
                    <button className="data"><b>{response.data.message.ranking.mortality}</b></button>
                </div>
                
                
                <div className = "format_ci">
                    <h3> Workplace Closures:</h3>
                    <p className = "p_left_ci">{response.data.message.Workplace}</p>
                </div>
                <div className = "format_ci">
                    <h3> International Travel Control:</h3>
                    <p className = "p_left_ci">{response.data.message.International}</p>
                </div>
                <div className = "format_ci">
                    <h3> Internal Movement Restrictions:</h3>
                    <p className = "p_left_ci">{response.data.message.Internal}</p>
                </div>
            </div>
            </div>
            )
            }else{
                setFeedback(<div></div>)
            }
        })
        .catch(err => {
          console.error(err);
        });
        post()
         
    }
     //functions
     function Sort() {
        console.log("placeholder");
    }
return (
        
        <div>
            <div>
                <h2>Search Country Stats</h2>
                <br>
                </br>
                   {feedback}
            </div>
         
        <form className='form-data' onSubmit={handleSubmit} >
        <label>
            <input
              className="input-field"
              name="location"
              type="text"
              placeholder="Search For A Country"
              value={country  || "" }
              required
              onChange={e => setCountry(e.target.value)}
            />
          </label>
        <input className="input-field" type="submit" value="Results" />
        </form>
    </div>
  );
};
export default Search;