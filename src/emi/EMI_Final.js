import React from "react";

const EMI_Final = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h4>Amount- {props.amount}</h4>
          <h4>Interest- {props.amount - props.principal}</h4>
        </div>
      </div>
    </div>
  );
};

export default EMI_Final;
