import React from "react";

export const AddTransaction = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <hr />
        <div class="card text-center text-light bg-dark">
          <div class="card-header">New Transaction</div>
        </div>
        <form className="my-2">
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Expense</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input placeholder"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Amount</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input placeholder"
            />
          </div>
          <button type="submit" class="btn btn-block btn-primary">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};
