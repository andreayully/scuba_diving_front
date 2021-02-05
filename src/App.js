import './App.css';
import React, { Component } from 'react';
import ScubaDiveList from './components/ScubaDiveList'
import ScubaDiveSave from './components/ScubaDiveSave'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component{
  render(){
    return(
      <div>
      <Router>
            <Navigation/>
            <div className="container p-4">
                <Route path="/" exact component={ScubaDiveList}></Route>
                <Route path="/add-scubadiving" component={ScubaDiveSave}></Route>
            </div>
      </Router>
    </div>


    )
  }
}

export default App;
