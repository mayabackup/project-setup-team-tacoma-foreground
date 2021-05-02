import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
// modules
import Navbar from './components/Navbar.js'

// pages
import AboutUs from "./pages/aboutus"
import HomePage from "./pages/home"
import confirmation from './pages/confirmation.js'
import FlightInfo from './pages/flight_info.js'
import TopLocations from './pages/top_locations.js'
import CovidInfo from './pages/covid_info'
import MeetTheTeam from './pages/MeetTheTeam.js'
import TravelResources from './pages/TravelResources'
import Featured from './pages/FeaturedLocations'
import Login from './pages/login'
import SignUp from './pages/SignUp'
import favorites from './pages/favorites'
import search from './pages/search'

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
      <Route path='/login' component={Login}></Route>
      <Route path='/SignUp' component={SignUp}></Route>
      <Route path='/favorites' component={favorites}></Route>
      <Route path='/search' component={search}></Route>

    </Router>
  );
}
export default App;