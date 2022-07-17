import React, { useState } from "react";
import LiftstateChild from "./LiftstateChild";

const LiftState = () => {
  const [country, setCountry] = useState("");

  const updateCountry = (data) => {
    setCountry(data);
  };

  const updateCountryInput = (event) => {
    console.log("input trigger...", event.target.value);
    setCountry(event.target.value);
  };
  return (
    <>
      <div className="row bg-danger bg-opacity-75">
        <div className="col-12">LiftStateUp</div>
      </div>

      <div className="row bg-warning bg-opacity-75">
        <div className="col-12">
          <LiftstateChild
            country={country}
            liftFn={updateCountry}
            handlechange={updateCountryInput}
          />
        </div>
      </div>
    </>
  );
};

export default LiftState;
