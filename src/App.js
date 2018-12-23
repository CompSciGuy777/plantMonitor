import React, { Component } from "react";
import Barometer from "./components/Barometer";
import CarbonDioxide from "./components/CarbonDioxide";
import Moisture from "./components/Moisture";
import Temperature from "./components/Temperature";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Plant Monitor</h1>
        </header>
        <body>
          <Barometer />
          <Temperature />
          <CarbonDioxide />
          <Moisture />
        </body>
      </div>
    );
  }
}

export default App;
