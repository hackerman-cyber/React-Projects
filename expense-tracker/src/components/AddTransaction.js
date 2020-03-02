import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  // local state
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    addTransaction({
      id: Math.floor(Math.random() * 1000),
      text: text,
      amount: +amount
    });

    setText("");
    setAmount("");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <hr />
        <div className="card text-center text-light bg-dark">
          <div className="card-header">New Transaction</div>
        </div>
        <form className="my-2" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Expense</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter expense reason"
              value={text}
              onChange={e => {
                setText(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Amount</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter amount"
              value={amount}
              onChange={e => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};
