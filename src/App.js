import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header>
          <h1>FlightFares</h1>
        </header>
        <div className="form-inline">
          <div className="form-group">
            <label for="from">From</label><br/>
            <input type="text" placeholder="Country, city or airport"/>
          </div>
          <div className="form-group">
            <label for="to">To</label><br/>
            <input type="text" placeholder="Country, city or airport"/>
          </div>
        </div>

            <div >
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
