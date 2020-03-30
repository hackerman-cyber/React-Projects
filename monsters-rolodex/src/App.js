import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sabuj"
    };
  }
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p> {this.state.name}</p>
            <button onClick={() => this.setState({ name: "Jana" })}>
              lick me
            </button>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
