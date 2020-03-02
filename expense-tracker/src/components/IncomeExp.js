import React from "react";

export const IncomeExp = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-sm-6">
        <div className="card" style={{ marginTop: "5px" }}>
          <div className="row justify-content-between card-body">
            <div className="col">
              <h5 className="card-title" style={{ color: "green" }}>
                Income
              </h5>
              <h3>$ 250</h3>
            </div>
            <div className="col text-lg-right">
              <h5 className="card-title" style={{ color: "red" }}>
                Expenses
              </h5>
              <h3>$ 300</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
