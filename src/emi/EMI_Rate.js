import React from "react";

const EMI_Rate = (props) => {
  return (
    <div>
      <div className="row ">
        <div className="col-8">
          <h4>Enter Rate</h4>
          <input type="number" value={props.rate} onChange={props.Fn_rate} />
        </div>
      </div>
    </div>
  );
};

export default EMI_Rate;
