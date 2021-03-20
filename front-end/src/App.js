import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
// pages
import AboutUs from "./aboutus"

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
// pages
import HomePage from "./home"

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Route path='/aboutus' component={AboutUs}></Route>
=======
      <Route exact path='/' component={HomePage}></Route>
>>>>>>> master
    </Router>
  );
}
export default App;