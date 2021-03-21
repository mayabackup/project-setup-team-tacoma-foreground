import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
// pages
import AboutUs from "./aboutus"

// pages
import HomePage from "./home"
import Navbar from './Navbar.js'
import confirmation from './confirmation.js'
import MeetTheTeam from './MeetTheTeam.js'

function App() {
  return (
    <Router>
      
      
      <Navbar />
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/aboutus' component={AboutUs}></Route>
      <Route exact path='/confirmation' component={confirmation}></Route>
      <Route path='/MeetTheTeam' component={MeetTheTeam}></Route>
    </Router>
  );
}
export default App;