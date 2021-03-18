import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
// pages
import HomePage from "./pages/home"

function App() {
  return (
    <Router>
      <Route path='/' component={HomePage}></Route>
    </Router>
  );
}
export default App;