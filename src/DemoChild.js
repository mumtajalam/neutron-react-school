import React from "react";

const DemoChild = (props) => {
  return (
    <div>
      <h1>DemoChild</h1>
      <div>{props.name}</div>
    </div>
  );
};

export default DemoChild;
