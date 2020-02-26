import React from "react";
import "./styles.css";

import Alert from "react-bootstrap/Alert";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>

        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
      </div>
    );
  }
}

export default App;
