import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import "./home.css";
import { useHistory } from "react-router-dom";
import axios from "axios/lib/axios";
import WindowedSelect from "react-windowed-select";

const HomePage = ({ props }) => {

  //states
  const [citizenship, setCitizenship] = useState();
  const [location, setLocation] = useState();
  const [airport, setAirport] = useState();
  const [advanced, setAdvanced] = useState(null);
  const [feedback, setFeedback] = useState();
  const [updates, setUpdates] = useState(null);

  const [continent, setContinent] = useState(null);
  const [reason, setReason] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  const [data, setData] = useState(10);


   let history = useHistory();

  //after submit--> prevent defualt and go to confirmation page
  const handleSubmit = evt => {
    evt.preventDefault();
    localStorage.setItem('citizenship',citizenship)
    localStorage.setItem('location',location)
    localStorage.setItem('airport',airport)
    localStorage.setItem('continent',continent)
    localStorage.setItem('reason',reason)
    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    history.push("/confirmation");
    let formData={
      citizenship,
      location,
      airport,
      advanced,
      feedback,
      updates,
  
      //advanced
      continent,
      reason,
      name,
      email
    }
    console.log(formData)
    const post= async() => await axios
    .post('http://localhost:5000/',formData)
    .then(() => console.log('Sent form data'))
    .catch(err => {
      console.error(err);
    });
    post()
  };
  const handleChange = selectedOption => {
    setAirport({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  //advanced checkbox clicked
  const setAdvance = evt => {
    setAdvanced(evt.target.checked);
  };

 
  // if advanced click add forms and rerender page
  useEffect(() => {
    if (advanced === true) {
      setFeedback(
        <div>
          <label>
            <input
              className="input-field"
              name="continent"
              type="text"
              placeholder="Enter desired continent"
              value={continent}
              onChange={e => setContinent(e.target.value)}
            />
          </label>
          <br></br>
          <label>
            <input
              className="input-field"
              name="reason"
              type="text"
              placeholder="Enter reason for traveling"
              value={reason}
              onChange={e => setReason(e.target.value)}
            />
          </label>
          <br></br>

          <label>
            <input
              className="input-field"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <br></br>

          <label>
            <input
              className="input-field"
              name="email"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>

          <input
            className="input-field"
            type="checkbox"
            name="updates"
            checked={updates}
            onChange={e => setUpdates(e.target.checked)}
          />
          <label className="check">recieve updates</label>
        </div>
      );
    } else {
      setFeedback(<div></div>);
      setUpdates();
    }
  }, [advanced]);

  useEffect(() => {
    const getItems= async()=>{
     const resp= await axios.get("http://localhost:5000/")
     //console.log(resp.data.message)
     let optionItems;
     
       optionItems = Object.keys(resp.data.message).map((el) => ({
        value: resp.data.message[el].name,
        label: resp.data.message[el].name,
      }));
     
    // console.log(optionItems)

     setData(optionItems)
     console.log(data)
    } 
    getItems();

  }, [])

  //initial return with iframe and forms
  return (
    <div class="HomeCSS">
      <h1>Welcome to the Covid Travel Agent </h1>
      <div>
        <iframe
          title='covid-map'
          ondblclick="window.location='http://www.google.com'"
          src="https://public.domo.com/cards/bWxVg"
          width="100%"
          height="600"
          marginheight="0"
          marginwidth="0"
          frameborder="0"
        ></iframe>
      </div>
      <div>
        <form  className="inputs" onSubmit={handleSubmit}>
          <label>
            <input
              className="input-field"
              name="citizenship"
              type="text"
              placeholder="Enter your citizenship"
              value={citizenship}
              onChange={e => setCitizenship(e.target.value)}
            />
          </label>
          <br></br>
          <label>
            <input
              className="input-field"
              name="location"
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={e => setLocation(e.target.value)}
              //onChange={e => setChoreDesc(e.target.value)}
            />
          </label>
          <br></br>
          <label>
          <WindowedSelect className="input-field"
           
          onChange={handleChange}
          options={data}
         />
          </label>
          <input
      
            className="input-field"
            type="checkbox"
            name="advanced"
            checked={advanced}
            onChange={e => setAdvance(e)}
          />{" "}
          <label className="check">advanced</label>
          {feedback}
          <br></br>
          <input className="input-field" type="submit" value="CALCULATE" />
        </form>
      </div>
    </div>
  );
};
export default HomePage;
