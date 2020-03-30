import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sabuj",
      monsters: [
        { name: "Frankenstein", id: "abc1" },
        { name: "Dracula", id: "abc2" },
        { name: "Courage", id: "abc3" }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(mons => (
          <h1 key={mons.id}> {mons.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
