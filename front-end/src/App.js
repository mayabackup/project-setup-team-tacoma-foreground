import './App.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
// pages
import HomePage from "./home"

function App() {
  return (
    <Router>
      <Route exact path='/' component={HomePage}></Route>
    </Router>
  );
}
export default App;