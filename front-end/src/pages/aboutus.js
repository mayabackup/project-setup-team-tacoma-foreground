import React from "react";

import "./css/aboutus.css";

import { useHistory } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function AboutUs (props) {
  let history = useHistory();
  function redirectPage() {
    history.push("./meettheteam");
  }
  return (
    <div>
      <h1 className="title">About Us</h1>
      <br></br>
      <div className="purpose">
        <h2>Our Purpose and Philosophy</h2>
        
        <p>
          The COVID Travel Agent app is designed to provide prospective
          travelers with the most relevant knowledge to help them make a
          well-informed decision on international travel during the COVID
          pandemic. Particularly, the app aims at creating a personalized,
          comprehensive list of safest travel destinations based on the user's
          inputs (e.g. location, citizenship etc.), allowing the user to choose
          the most suitable destination for travel.
        </p>
        <p>
          COVID Travel Agent app collects and presents the relevant COVID and
          travel data that travelers, on their own, can usually gather only
          after a significant amount of research. This is due to the fact that
          the list of search outcomes (list of safest countries) is based on
          intersection of a diverse set of non-related user inputs (location,
          citizenship etc. )- it is usually difficult to find data for a
          particular intersection.
        </p>
      </div>
      <br></br>

      <div>
        <button
          onClick={e => redirectPage(e)}
          className="redirect"
          type="button">
          Meet The Team
        </button>
      </div>
      <br></br>
    </div>
  );
};

export default AboutUs;
