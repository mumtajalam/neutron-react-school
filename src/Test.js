import React from "react";
import { useState } from "react";

const Test = () => {
  const [temp, setTemp] = useState(1);
  const [item, setItem] = useState([]);

  const handlesubmit = () => {
    setTemp(temp + 1);
    console.log(item);
    setItem((oldvalue) => {
      return [temp, ...oldvalue];
    });
  };

  const Allclear = () => {
    setItem([]);
    setTemp(1);
  };
  return (
    <div>
      <br></br>
      OUTPUT:-
      <br></br>
      {item && item.map((temps) => <span>{temps}</span>)}
      <br></br>
      <button onClick={handlesubmit}>Add values</button>
      <button onClick={Allclear}>Clear values</button>
      <br></br>
    </div>
  );
};

export default Test;
