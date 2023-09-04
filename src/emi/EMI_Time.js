import React from "react";

const EMI_Time = (props) => {
  return (
    <div>
      <div className="row ">
        <div className="col-8">
          <h4>Enter Time</h4>
          <input type="number" value={props.time} onChange={props.Fn_time} />
        </div>
      </div>
    </div>
  );
};

export default EMI_Time;
