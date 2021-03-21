import React, { useState, useEffect } from 'react'
import './TravelResources.css'
import globalRestrictions from './img/WorldRestrictions.png';
import globalCases from './img/WorldCasesCDC.png';
import CDCnews from './img/CDCupdate.png'
import CNNnews from './img/CNNupdate.png'
import Recommendations from './img/RecommendedLocations.png'

const TravelResources = () => {

    return (
  <div className="TravelResources">
      <h1>Travel Resources</h1>
      <section className="TravResMain">

       <article className="GlobalRestrictions">
       <h2>Travel Restrictions Globaly (Link to CDC):</h2>
       <a href="https://covid.cdc.gov/covid-data-tracker/#global-counts-rates" target="_blank">
       <img src={globalCases} class="globalCasesImage"/>
       </a>    
       </article>

       <article className="Recommendations">
       <h2>Travel Recommendations (Link to CDC):</h2>
       <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/map-and-travel-notices.html" target="_blank">
       <img src={Recommendations} class="recommendationsImage"/>
       </a>
       </article>

       <article className="Restrictions">
       <h2>Latest Travel Restrictions (Link to TravelCentre):</h2>
       <a href="https://www.iatatravelcentre.com/world.php" target="_blank">
       <img src={globalRestrictions} class="globalCasesImg"/>
       </a>
       </article>
      
       <article className="CovidNews">
       <h2>Latest Covid News (Links to CDC and CNN):</h2>
       <a href="https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/index.html" target="_blank">
       <img src={CDCnews} class="CDCnews"/>
       </a>
       <a href="https://www.cnn.com/world/live-news/coronavirus-pandemic-vaccine-updates-03-19-21/h_ca62ba5c57631d631cc52bc44f4eed21" target="_blank">
       <img src={CNNnews} class="CNNnews"/>
       </a>
       </article>

       </section>
  </div>
    );
  }
  
  export default TravelResources;