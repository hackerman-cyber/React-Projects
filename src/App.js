import React from "react";
import "./styles.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

library.add(fab);

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Navbar title="Github Finder" icons={["fab", "github"]} /> <Users />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
