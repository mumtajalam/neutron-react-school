import React, { useState } from "react";

const HookMemo = () => {
  const listCars = ["Audi", "Suzuki", "Hondai", "Nano", "Kia", "Swift", "Ford"];
  const [cars, updateCars] = useState(listCars);
  const [subsc, updateSubsc] = useState(false);

  const displayCars = () => {};
  return (
    <>
      <div className="row">
        <div className="col-12">Hook Memo</div>
      </div>
      <div className="row">
        <div className="col-12">
          {cars && cars.map((temp) => <div>{temp}</div>)}
        </div>
      </div>
    </>
  );
};

export default HookMemo;
