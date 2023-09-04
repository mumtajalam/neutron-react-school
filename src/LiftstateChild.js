import React from "react";

const LiftstateChild = (props) => {
  const { country, liftFn, handlechange } = props;
  return (
    <>
      <div className="row bg-warning bg-opacity-75">
        <div className="col-12">
          <h1>Country Name:- {country}</h1>
          <br></br>
          <button onClick={() => liftFn("India")}>India</button>
          <button onClick={() => liftFn("Russia")}>Russia</button>
          <button onClick={() => liftFn("UK")}>UK</button>
          <button onClick={() => liftFn("USA")}>USA</button>
          <br></br>
          <br></br>
          <input type="text" onChange={handlechange} />
        </div>
      </div>
    </>
  );
};

export default LiftstateChild;
