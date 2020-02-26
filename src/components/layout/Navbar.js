import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";

class Navbar extends Component {
  static defaultProps = {
    // default props
    title: "Github Brad",
    icons: ["fab", "apple"]
  };

  static propTypes = {
    // prop typechecking
    title: PropTypes.string.isRequired,
    icons: PropTypes.array.isRequired
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <h1>
          <FontAwesomeIcon icon={this.props.icons} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
