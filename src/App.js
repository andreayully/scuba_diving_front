import './App.css';
import React, { Component } from 'react';
import ScubaDiveList from './components/ScubaDiveList'
import ScubaDiveSave from './components/ScubaDiveSave'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends Component{
  render(){
    return(
      <div>
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">ScubaDiving Journal</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/add-scubadiving-data">Add ScubaDiving Journal</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      <div className="container p-4">
          <Route path="/" component={ScubaDiveList}></Route>
          <Route path="/add-scubadiving-data" component={ScubaDiveSave}></Route>
      </div>
      </Router>
    </div>


    )
  }
}

export default App;
