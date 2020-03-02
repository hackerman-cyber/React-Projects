import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExp = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(trans => trans.amount);
  const positiveSum = amounts
    .filter(val => val > 0)
    .reduce((acc, curr) => acc + curr, 0);
  const negativeSum = amounts
    .filter(val => val < 0)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-sm-6">
        <div className="card" style={{ marginTop: "5px" }}>
          <div className="row justify-content-between card-body">
            <div className="col" style={{ borderRight: "1px solid grey" }}>
              <h5 className="card-title" style={{ color: "green" }}>
                Income
              </h5>
              <h3>+${positiveSum}</h3>
            </div>
            <div className="col text-lg-right">
              <h5 className="card-title" style={{ color: "red" }}>
                Expenses
              </h5>
              <h3>-${Math.abs(negativeSum)}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
