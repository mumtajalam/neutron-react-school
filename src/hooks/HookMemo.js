import React, { useMemo, useState } from "react";

const HookMemo = () => {
  const listCars = [
    "mahindra",
    "suzuki",
    "kia",
    "tata",
    "bmw",
    "ford",
    "Hyundai",
    "Renault",
  ];
  const [cars, updateCars] = useState(listCars);
  const [subscribe, updateSubscribe] = useState(false);

  const displayCars = (cars) => {
    const carsHtml =
      cars && cars.map((temp, index) => <div key={temp + index}>{temp}</div>);
    return carsHtml;
  };

  const renderCars = useMemo(() => displayCars(cars), [cars]);
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h1>Cars List</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">{renderCars}</div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1>.......................................</h1>
          <button onClick={() => updateSubscribe(!subscribe)}>subscribe</button>
        </div>
        <div>
          <button onClick={() => updateCars([...cars, "Tesla"])}>add</button>
        </div>
      </div>
    </div>
  );
};

export default HookMemo;
