import React, { useReducer } from "react";

const HookReducer = () => {
  const initialValue = {
    numTransaction: 0,
    netBalance: 10000,
    showBalance: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREAMENTONE":
        return {
          numTransaction: state.numTransaction + 1,
          netBalance: state.netBalance,
          showBalance: state.showBalance,
        };
      case "INCREAMENT5K":
        return {
          numTransaction: state.numTransaction + 1,
          netBalance: state.netBalance + 5000,
          showBalance: state.showBalance,
        };
      case "SHOWNETBALANCE":
        return {
          numTransaction: state.numTransaction,
          netBalance: state.netBalance,
          showBalance: !state.showBalance,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <br></br>
      <button onClick={() => dispatch({ type: "INCREAMENTONE" })}>
        Update num Transaction
      </button>
      <br></br>
      <button onClick={() => dispatch({ type: "INCREAMENT5K" })}>
        Increament Balance by 5000k
      </button>
      <br></br>
      <button onClick={() => dispatch({ type: "SHOWNETBALANCE" })}>
        Show Balance
      </button>
      <br></br>
      <div>Blance -{state.numTransaction}</div>
      <div>Blance -{state.netBalance}</div>
      {state.showBalance && <div>Mission success...</div>}
    </div>
  );
};

export default HookReducer;
