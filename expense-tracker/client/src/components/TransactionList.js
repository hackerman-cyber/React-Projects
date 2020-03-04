import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";
export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  // call getTransactions first
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        return <Transaction key={transaction._id} transaction={transaction} />;
      })}
    </>
  );
};
