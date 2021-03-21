import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
// pages
import AboutUs from "./aboutus"

// pages
import HomePage from "./home"
import Navbar from './Navbar.js'
import MeetTheTeam from './MeetTheTeam.js'

function App() {
  return (
    <Router>
      
      
      <Navbar />
<<<<<<< HEAD
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/aboutus' component={AboutUs}></Route>
=======
      <Route exact path='/' component={HomePage}>
      </Route>
      <Route path='/MeetTheTeam' component={MeetTheTeam}></Route>
>>>>>>> master
    </Router>
  );
}
export default App;