import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  // console.log(context);
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-6">
          <div className="card">
            <div
              className="card-header text-center bg-dark text-light"
              style={{ marginTop: "3px" }}
            >
              History
            </div>
          </div>
        </div>
      </div>
      {transactions.map(transaction => {
        return <Transaction key={transaction.id} transaction={transaction} />;
      })}
    </>
  );
};
