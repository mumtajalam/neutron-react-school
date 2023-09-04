import React, { useEffect, useState } from "react";

const CalcuInput = () => {
  const [firstInput, setFirstInput] = useState();
  const [secondInput, setSecondInput] = useState();

  let first = 0;
  let second = 0;

  useEffect(() => {
    first = parseInt(firstInput) + 1;
    setSecondInput(first);
  }, [firstInput]);

  useEffect(() => {
    second = parseInt(secondInput) - 1;
    setFirstInput(second);
  }, [secondInput]);
  return (
    <div>
      <input
        type="number"
        value={firstInput}
        onChange={(e) => setFirstInput(e.target.value)}
      />
      <input
        type="number"
        value={secondInput}
        onChange={(e) => setSecondInput(e.target.value)}
      />
    </div>
  );
};

export default CalcuInput;
