import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    var roughStyles = {
      textAlign: "left"
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FlightFares</h1>
        </header>
            <div>
              Searcher Component:
              <div>
                From | To | Depart | Return | PAX | Econ/Business
              </div>
              <input/><input/><input/><input/><input/><input/>
            </div>
            <div style={roughStyles}>
              Results Component:
              <br/>
              Maybe a loading bar
              <br/>
              Listed Results:
              <div>
                Price | Airline Logo
                <br/>
                Price | From           ---> To
                <br/>
                Price | Departure time ---> Arrival Time
              </div>

            </div>
      </div>
    );
  }
}

export default App;
