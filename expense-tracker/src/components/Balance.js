import React from "react";
export const Balance = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-4 col-sm-4">
        <div className="card" style={{ marginTop: "5px" }}>
          <div className="card-body">
            <h5 className="card-title">Your Balance</h5>
            <h6 className="card-subtitle mb-2 text-muted">Save more!</h6>
            <h1 className="card-text">$ 250</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
