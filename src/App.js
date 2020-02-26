import React from "react";
import "./styles.css";

class App extends React.Component {
  name = "Sabuj";
  foo = () => {
    return "JU";
  };
  render() {
    const loading = true;

    return (
      <div className="App">
        {loading ? <h2>Loading ...</h2> : <h3>No worries welcome </h3>}
        Hi I am {this.name} and I study in {this.foo()}
      </div>
    );
  }
}

export default App;
