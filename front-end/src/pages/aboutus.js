import React from "react";

import { useState, useEffect } from "react";
import "./css/aboutus.css";

import { useHistory } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// about us page
function AboutUs (props) {
  let history = useHistory();
  // will redirect to the meet the team page when useer clicks on the button
  function redirectPage() {
    history.push("./meettheteam");
  }
  return (
    <div>
      <h1 className="title">About Us</h1>
      <Carousel width='50pc' autoPlay interval="5000" transitionTime="5000" className='car'>
        <div className="carousel-about">
          <img className='img-car' src={"https://picsum.photos/300/200?random=11"} />
          <p className="legend">Paris</p>
        </div>
        <div className="carousel-about">
          <img className='img-car' src={"https://picsum.photos/300/200?random=12"} />
          <p className="legend">Spain</p>
        </div>
        <div className="carousel-about">
          <img className='img-car' src={"https://picsum.photos/300/200?random=13"} />
          <p className="legend">Turkey</p>
        </div>
      </Carousel>
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
