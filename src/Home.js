import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const [state, setState] = useState(0);

  const CountFn = (val) => {
    if (val === true) {
      setCount(count + state);
    } else {
      setCount(count - state);
    }
  };
  return (
    <>
      <div>count:- {count}</div>
      <input
        type="number"
        value={state}
        onChange={(e) => setState(parseInt(e.target.value))}
      />
      <button onClick={() => CountFn(true)}>increament</button>
      <button onClick={() => CountFn(false)}>decreament</button>
      <br></br>
    </>
  );
};
export default Home;
