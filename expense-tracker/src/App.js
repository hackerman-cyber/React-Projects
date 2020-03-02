import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavbarComp } from "./components/NavbarComp";
import { Balance } from "./components/Balance";
import { IncomeExp } from "./components/IncomeExp";

function App() {
  return (
    <Fragment>
      <NavbarComp />
      <div className="container">
        <Balance />
        <IncomeExp />
      </div>
    </Fragment>
  );
}

export default App;
