import React from "react";
import { Transaction } from "./Transaction";
export const TransactionList = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-6">
          <div className="card">
            <div
              class="card-header text-center bg-dark text-light"
              style={{ marginTop: "3px" }}
            >
              History
            </div>
          </div>
        </div>
      </div>
      <Transaction />
    </>
  );
};
