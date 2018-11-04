import React, { Component } from "react";
import Game from "./Game/Game";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
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
