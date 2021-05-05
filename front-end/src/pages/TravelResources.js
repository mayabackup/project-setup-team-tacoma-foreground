import './css/TravelResources.css'
import globalRestrictions from '../img/WorldRestrictions.png';
import globalCases from '../img/WorldCasesCDC.png';
import CDCnews from '../img/CDCupdate.png'
import CNNnews from '../img/CNNupdate.png'
import Recommendations from '../img/RecommendedLocations.png'

const TravelResources = () => {

    return (
  <div className="TravelResources">
      <h1>Travel Resources</h1>
      <section className="TravResMain">

       <article className="GlobalRestrictions">
       <h2>Travel Restrictions Globaly (Link to CDC):</h2>
       <a href="https://covid.cdc.gov/covid-data-tracker/#global-counts-rates" rel="noreferrer" target="_blank">
       <img src={globalCases} class="globalCasesImage" alt=""/>
       </a>    
       </article>

       <article className="Recommendations">
       <h2>Travel Recommendations (Link to CDC):</h2>
       <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/map-and-travel-notices.html" rel="noreferrer" target="_blank">
       <img src={Recommendations} class="recommendationsImage" alt=""/>
       </a>
       </article>

       <article className="Restrictions">
       <h2>Latest Travel Restrictions (Link to TravelCentre):</h2>
       <a href="https://www.iatatravelcentre.com/world.php" rel="noreferrer" target="_blank">
       <img src={globalRestrictions} class="globalCasesImg" alt=""/>
       </a>
       </article>
      
       <article className="CovidNews">
       <h2>Latest Covid News (Links to CDC and CNN):</h2>
       <a href="https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/index.html" rel="noreferrer" target="_blank">
       <img src={CDCnews} class="CDCnews" alt=""/>
       </a>
       <a href="https://www.cnn.com/world/live-news/coronavirus-pandemic-vaccine-updates-03-19-21/h_ca62ba5c57631d631cc52bc44f4eed21" rel="noreferrer" target="_blank">
       <img src={CNNnews} class="CNNnews" alt=""/>
       </a>
       </article>

       </section>
  </div>
    );
  }
  
  export default TravelResources;