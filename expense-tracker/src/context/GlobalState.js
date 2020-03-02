import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initialState
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Flower", amount: 20 },
    { id: 3, text: "Flower", amount: -10 },
    { id: 4, text: "Flower", amount: 20 }
  ]
};

// create the context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
