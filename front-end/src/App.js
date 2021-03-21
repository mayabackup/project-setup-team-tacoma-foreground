import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
// pages
import HomePage from "./home"
import Navbar from './Navbar.js'
import confirmation from './confirmation.js'
import MeetTheTeam from './MeetTheTeam.js'
import TravelResources from './TravelResources';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/confirmation' component={confirmation}></Route>
      <Route path='/MeetTheTeam' component={MeetTheTeam}></Route>
      <Route path='/TravelResources' component={TravelResources}></Route>
    </Router>
  );
}
export default App;