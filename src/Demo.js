import React, { useState } from "react";
import DemoChild from "./DemoChild";

const Demo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>count:-{count}</span>
      <br></br>
      <button onClick={() => setCount(count + 1)}>INC</button>
      <br></br>
      <DemoChild name="shaheda" />
    </div>
  );
};

export default Demo;
