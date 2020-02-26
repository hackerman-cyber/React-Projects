import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";

const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <h1>
        <FontAwesomeIcon icon={props.icons} />
        {props.title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  // default props
  title: "Github Brad",
  icons: ["fab", "apple"]
};

Navbar.propTypes = {
  // prop typechecking
  title: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired
};

export default Navbar;
