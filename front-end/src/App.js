import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
// pages
import HomePage from "./home"
import Navbar from './Navbar.js'

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={HomePage}></Route>
    </Router>
  );
}
export default App;