import React from "react";

import { useHistory } from "react-router-dom";
import "./confirmation.css";

//confirmation component
const Confirmation = ({ props }) => {
    // get local variables for usr data
  const citizenship = localStorage.getItem("citizenship");
  const location = localStorage.getItem("location");
  const airport = localStorage.getItem("airport");
  const loc =
    "https://maps.google.com/maps?q=" +
    location +
    "&t=&z=13&ie=UTF8&iwloc=&output=embed";
  console.log(loc);
  let history = useHistory();

  // transfer pages after confirmation 
  function setConfirm() {
    history.push("/toplocations");
  }

  // go back to home
  function setHome() {
    history.push("/");
  }
  // return the component
  return (
    <div>
      <div className="user-data">
        <h1>Confirmation</h1>
        <h3>
          Your Citizenship: <span className="user-input"> {citizenship}</span>
        </h3>
        <h3>
          Current Location: <span className="user-input"> {location}</span>
        </h3>
        <h3>
          Desired Departure Airport:{" "}
          <span className="user-input"> {airport}</span>
        </h3>
      </div>
      <div>
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src={loc}
        ></iframe>
      </div>
      <br></br>
      <div>
        <button onClick={e => setConfirm(e)} className="confirm" type="button">
          confirm and view results
        </button>
        <br></br>
        <button onClick={e => setHome(e)} className="back" type="button">
          return to calculator
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
