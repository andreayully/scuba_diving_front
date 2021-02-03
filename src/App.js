import './App.css';
import React, { Component } from 'react';
import ScubaDiveList from './components/ScubaDiveList'


class App extends Component{
  render(){
    return(
      <div>
         <h1>Hola mundo</h1>
         <ScubaDiveList/>
      </div>
     

    )
  }
}

export default App;
