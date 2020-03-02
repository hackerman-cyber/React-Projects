import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export const Transaction = ({ transaction }) => {
  const col = transaction.amount > 0 ? "green" : "red";
  const sign = transaction.amount > 0 ? "+" : "-";

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="row justify-content-center my-1 ">
      <div className="col-md-6 col-sm-6">
        <div className="card" style={{ borderRight: `5px solid ${col}` }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {transaction.text}{" "}
              <span style={{ float: "right" }}>
                {sign} ${Math.abs(transaction.amount)}
              </span>
              {/* <span
                className="glyphicon glyphicon-remove"
                style={{ float: "left" }}
              ></span> */}
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="delete-btn"
                style={{
                  float: "left",
                  color: "red",
                  marginRight: "15px",
                  left: "-5px",
                  cursor: "pointer",
                  fontSize: "20px",
                  opacity: "50%"
                }}
                onClick={() => {
                  deleteTransaction(transaction.id);
                }}
              />
              {/* <button
                className="delete-btn"
                onClick={() => {
                  console.log(transaction);
                  deleteTransaction(transaction.id);
                }}
              >
                x
              </button> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
