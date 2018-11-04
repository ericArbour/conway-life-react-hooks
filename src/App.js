import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Game coming soon</div>
        <footer className="App-footer">
          Powered by:
          <img src={logo} className="App-logo" alt="logo" />
          hooks
        </footer>
      </div>
    );
  }
}

export default App;
