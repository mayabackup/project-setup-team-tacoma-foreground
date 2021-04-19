import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
// modules
import Navbar from './Navbar.js'
// pages
import AboutUs from "./aboutus"

// pages
import HomePage from "./home"
import confirmation from './confirmation.js'
import FlightInfo from './flight_info.js'
import TopLocations from './top_locations.js'
import CovidInfo from './covid_info';
import MeetTheTeam from './MeetTheTeam.js'
import TravelResources from './TravelResources';
import Featured from './FeaturedLocations';
import login from './login';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/aboutus' component={AboutUs}></Route>
      <Route exact path='/confirmation' component={confirmation}></Route>
      <Route exact path='/top_locations' component={TopLocations}></Route>
      <Route exact path='/covid_info' component={CovidInfo}></Route>
      <Route exact path='/flight_info' component={FlightInfo}></Route>
      <Route path='/MeetTheTeam' component={MeetTheTeam}></Route>
      <Route path='/TravelResources' component={TravelResources}></Route>
      <Route path='/FeaturedLocations' component={Featured}></Route>
      <Route path='/login' component={login}></Route>
    </Router>
  );
}
export default App;