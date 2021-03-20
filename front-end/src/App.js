import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
// pages
import AboutUs from "./aboutus"

function App() {
  return (
    <Router>
      <Route path='/aboutus' component={AboutUs}></Route>
    </Router>
  );
}
export default App;