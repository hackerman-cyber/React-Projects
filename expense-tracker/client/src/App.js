import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavbarComp } from "./components/NavbarComp";
import { Balance } from "./components/Balance";
import { IncomeExp } from "./components/IncomeExp";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <NavbarComp />
      <div className="container">
        <Balance />
        <IncomeExp />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
