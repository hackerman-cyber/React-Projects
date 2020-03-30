import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sabuj",
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
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
