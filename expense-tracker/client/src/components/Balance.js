import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(tr => tr.amount); // arr of amounts
  const total = amounts.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="row justify-content-center">
      <div className="col-md-4 col-sm-4">
        <div className="card" style={{ marginTop: "5px" }}>
          <div className="card-body">
            <h5 className="card-title">Your Balance</h5>
            <h6 className="card-subtitle mb-2 text-muted">Save more!</h6>
            <h1 className="card-text">${numberWithCommas(total)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
