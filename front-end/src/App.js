import './App.css';
<<<<<<< HEAD
=======
import React from 'react'
>>>>>>> master
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
// pages
import AboutUs from "./aboutus"

// pages
import HomePage from "./home"
import Navbar from './Navbar.js'

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Route path='/aboutus' component={AboutUs}></Route>
=======
      <Navbar />
>>>>>>> master
      <Route exact path='/' component={HomePage}></Route>
    </Router>
  );
}
export default App;