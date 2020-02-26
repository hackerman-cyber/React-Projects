import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <h1>
          <FontAwesomeIcon icon={["fab", "github"]} />
          Navbar
        </h1>
      </nav>
    );
  }
}

export default Navbar;
