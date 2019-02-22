import React, { Component } from 'react';
import './App.css';
import Mapa from './containers/Map/mapa'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Acid Labs Challenge - Aníbal Rodríguez</h1>
        <Mapa />
      </div>
    );
  }
}

export default App;
