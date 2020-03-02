import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export const NavbarComp = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/#">
          <FontAwesomeIcon icon={faList} style={{ marginRight: "5px" }} />
          Expense Tracker
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
