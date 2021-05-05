import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./css/covid_info.css";

const CovidInfo = ({ props }) => {
    const [destination, setDestination] = useState([]);
    const [cases, setCases] = useState(0);
    const [current_cases, setCurrent] = useState(0);
    const [vac, setVac] = useState(0);
    const [mort, setMort] = useState(0);
    const [quarantine, setQuarantine] = useState("Unknown");
    const [gstringency, setGstringency] = useState(0);
    const [work, setWork] = useState("Unknown");
    const [travel, setTravel] = useState("");
    const [move, setMove] = useState("");
    const [location, setLocation] = useState({});
    const [errorMessage, setErrorMessage] = useState();
    let history = useHistory();

    useEffect(() => {
        const getItems= async()=>{
        const resp= await axios.get("http://localhost:5000/covid_info");
        const data_covid=resp.data.message[Object.keys(resp.data.message)[0]];
        if(data_covid!=null){
        if(data_covid.data.total_cases!=null){
            setCases(data_covid.data.total_cases);
        }
        else{
            setCases("Data Unknown");
        }
        if(data_covid.location!=null){
            setDestination(data_covid.location);
        }
        else{
            setDestination("Data Unknown");
        }
        if(data_covid.data.total_cases!=null){
            setCurrent(data_covid.data.new_cases);
        }
        else{
            setCurrent("Data Unknown");
        }
        if(data_covid.data.total_vaccinations_per_hundred!=null){
            setVac(data_covid.data.total_vaccinations_per_hundred);
        }
        else{
            setVac("Data Unknown");
        }
        if(data_covid.data.stringency_index){
            setGstringency(data_covid.data.stringency_index);
        }
        else{
            setGstringency("Data Unknown");
        }
        if(data_covid.Workplace){
            setWork(data_covid.Workplace);
        }
        else{
            setWork("Data Unknown");
        }
        if(data_covid.International){
            setTravel(data_covid.International);
        }
        else{
            setTravel("Data Unknown");
        }
        if (data_covid.Internal){
            setMove(data_covid.Internal);
        }
        else{
            setMove("Data Unknown");
        }
            setLocation(data_covid);
        
        
    }
        }
        getItems();

    }, [])

    function FlightInfo() {
        window.open("https://www.tripadvisor.com/")
    }
    function handelClick(evt){
        evt.preventDefault();
        const formData={
            location
        }
        const post= async() => await axios
        .post('http://localhost:5000/covid_info',formData)
        .then((response) =>{
            console.log(response.data)

            if(response.data.error===true){
                setErrorMessage(<div><h2>Cannot save if not logged in!</h2></div>)
     
            }else{
                setErrorMessage(<div><h2>SAVED THE LOCATION! View on the Saved Locations Page </h2></div>)
            }
          
        })
        .catch(err => {
          console.error(err);
        });
        post()
     
      };

    return (
        <div id="covid_info">
            <div className="flex-container">
                 &nbsp;&nbsp;&nbsp;
                <h2>Covid Information</h2>
                <div className = "space_between">
                    <button id="ci_button">Location: {destination}</button>
                </div>
                <div className = "space_between">
                    <span class="field-tip">
                    <h3>ⓘ Total number of cases:</h3>
                    <span class="tip-content">Put help text in here!</span>
                    </span>
                    <button className="data"><b>{cases} cases</b></button>
                </div>
                <div className = "space_between">
                    <span class="field-tip">
                    <h3>ⓘ Current number of cases:</h3>
                    <span class="tip-content">Put help text in here!</span>
                    </span>
                    <button className="data"><b>{current_cases} cases</b></button>
                </div>
                <div className = "space_between">
                    <span class="field-tip">
                    <h3>ⓘ Percentage of population vaccinated:</h3>
                    <span class="tip-content">Number of people vaccinated per 100</span>
                    </span>
                    <button className="data"><b>{vac} %</b></button>
                </div>
                <div className = "space_between">
                    <span class="field-tip">
                    <h3>ⓘ Mortality risk:</h3>
                    <span class="tip-content">Covid-related deaths per 100 cases</span>
                    </span>
                    <button className="data"><b>{mort} %</b></button>
                </div>
                <div className = "space_between">
                    <span class="field-tip">
                    <h3>ⓘ Quarantine periods:</h3>
                    <span class="tip-content">Days of mandatory quarantine required upon arrival</span>
                    </span>
                    <button className="data"><b>{quarantine} days</b></button>
                </div>
                <div className = "space_between">
                    <span class="field-tip">
                    <h3>ⓘ Stringency index:</h3>
                    <span class="tip-content">This is a composite measure based on nine response indicators including school closures, workplace closures, and travel bans, rescaled to a value from 0 to 100 (100 = strictest).</span>
                    </span>
                    <button className="data"><b>{gstringency}</b></button>
                </div>
                <div className = "format_ci">
                    <span class="field-tip">
                    <h3>ⓘ Workplace Closures:</h3>
                    <span class="tip-content">0: No measures; 1: Recommended; 2: Required for some; 3: Required for all but key workers
                    </span>
                    </span>
                    <p className = "p_left_ci">{work}</p>
                </div>
                <div className = "format_ci">
                    <span class="field-tip">
                    <h3>ⓘ International Travel Control:</h3>
                    <span class="tip-content">0: No measures; 1: Screening; 2: Quarantine from high-risk regions; 3: Ban on high-risk regions; 4: Total border closure; </span>
                    </span>
                    <p className = "p_left_ci">{travel}</p>
                </div>
                <div className = "format_ci">
                    <span class="field-tip">
                    <h3>ⓘ Internal Movement Restrictions:</h3>
                    <span class="tip-content">0: No measures; 1: Recommend movement restriction; 2: Restrict movement;</span>
                    </span>
                    <p className = "p_left_ci">{move}</p>
                
                </div>
               
                <div>
                     {errorMessage}   
                </div>
                 <div>
                    <button button onClick={e => FlightInfo(props)} id="margin">Tripadvisor</button>
                    &nbsp;&nbsp;&nbsp;
                    <button button onClick={handelClick} id="margin2">Save Country</button>
                </div>
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