import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export const NavbarComp = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        {/* eslint-disable-next-line */}
        <a className="navbar-brand text-white bg-dark">
          <FontAwesomeIcon icon={faList} style={{ marginRight: "5px" }} />
          Expense Tracker
        </a>
      </nav>
    </>
  );
};
