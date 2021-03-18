import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {useState, useEffect} from "react"
import "../home.css"
import logo from '../worldmap.jpg'; // with import
import { useHistory } from "react-router-dom"; 



const HomePage=({props})=>{
        const [citizenship, setCitizenship] = useState()
        const [location, setLocation] = useState()
        const [airport, setAirport] = useState()        
        const [advanced, setAdvanced] = useState(null)
        const [feedback, setFeedback] = useState();
        const [updates, setUpdates] = useState(null);

        const [continent, setContinent] = useState(null);
        const [reason, setReason] = useState(null);
        const [name, setName] = useState(null);
        const [email, setEmail] = useState(null);

    let isAdvanced=true;
    let history = useHistory();

      const handleSubmit= (evt)=>  {
        evt.preventDefault();
        alert("SUBMITTED" + citizenship)
        alert("SUBMITTED" + location)
        alert("SUBMITTED" + airport)
      
        history.push("/here");
      }
 
      const setAdvance= (evt)=>  {
       console.log(evt.target.checked)
        isAdvanced=evt.target.checked
        setAdvanced(evt.target.checked)
      }
      useEffect(()=>{
          if (advanced===true){
            setFeedback(
                <div>
                <label >
                <input className="input-field"
                    name="continent"
                    type="text"
                    placeholder="Enter desired continent"
                    value={continent}
                    onChange={e=>setContinent(e.target.value) }
                />
              </label>
              <br></br>
              <label>
              <input className="input-field"
                  name="reason"
                  type="text"
                  placeholder="Enter reason for traveling"
                  value={reason}
                  onChange={e=>setReason(e.target.value) }
              />
            </label>
            <br></br>

            <label>
            <input className="input-field"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={e=>setName(e.target.value) }
            />
          </label>
          <br></br>

          <label>
          <input className="input-field"
              name="email"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={e=>setEmail(e.target.value) }
          />
        </label>
 
        
        <input className="checkbox-1"
          type="checkbox"
          name="updates"
          checked={updates}
          onChange={(e=>setUpdates(e.target.checked)) }
        /><label className='check'>
        recieve updates
        </label>
      
        </div>   
            )
          }
          else{
            setFeedback(<div></div>)
            setUpdates()
          }
      },[advanced])
  return (   
  
  <div>
      <h1>Welcome to the Coivd Travel Agent</h1>
   <img src={logo} alt="World Map"></img>
      
    <form className="inputs" onSubmit={handleSubmit}>
      <label >
        <input className="input-field"
            name="citizenship"
            type="text"
            placeholder="Enter your citizenship"
            value={citizenship}
            onChange={e=>setCitizenship(e.target.value) }
        />
      </label>
<br></br>

      <label>
        <input className="input-field"
            name="location"
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={e=>setLocation(e.target.value) }
            //onChange={e => setChoreDesc(e.target.value)}

        />
      </label>


      <br></br>
      <label>
        <input className="input-field"
            name="airport"
            type="text"
            placeholder="Enter desired airport"
            value={airport}
            onChange={e=>setAirport(e.target.value) }
        />
      </label>


        <input  className="checkbox"
          type="checkbox"
          name="advanced"
          checked={advanced}
          onChange={(e=>setAdvance(e))}
        />       <label   className='check'> 
         advanced
          </label>
      {feedback}
    <br></br>
      <input type="submit" value="CALCULATE" />
      
    </form>
    
  </div>

);
}
export default HomePage;