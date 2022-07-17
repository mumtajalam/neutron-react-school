import React from "react";

const LiftstateChild = (props) => {
  return (
    <>
      <div className="row bg-warning bg-opacity-75">
        <div className="col-12">
          <h1>Country Name:- {props.country}</h1>
          <br></br>
          <button onClick={() => props.liftFn("India")}>India</button>
          <button onClick={() => props.liftFn("Russia")}>Russia</button>
          <button onClick={() => props.liftFn("UK")}>UK</button>
          <button onClick={() => props.liftFn("USA")}>USA</button>
          <br></br>
          <br></br>
          <input type="text" onChange={props.handlechange} />
        </div>
      </div>
    </>
  );
};

export default LiftstateChild;
