import React, { useEffect, useState } from "react";
import EMI_Principal from "./EMI_Principal";
import EMI_Rate from "./EMI_Rate";
import EMI_Time from "./EMI_Time";
import EMI_Final from "./EMI_Final";
import EMI_Graph from "./EMI_Graph";

const LiftState = () => {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(8);
  const [time, setTime] = useState(1);
  const [amount, setAmount] = useState(0);

  const Fn_principal = (event) => {
    console.log("Principal...", event.target.value);
    setPrincipal(event.target.value);
  };
  const Fn_rate = (event) => {
    console.log("Principal...", event.target.value);
    setRate(event.target.value);
  };
  const Fn_time = (event) => {
    console.log("Principal...", event.target.value);
    setTime(event.target.value);
  };
  useEffect(() => {
    console.log("Principal....", principal);
    console.log("rate....", rate);
    console.log("time....", time);
    // let temp_amount = 0;
    // temp_amount = principal * Math.pow(1 + rate / 100, time);
    // setAmount(temp_amount);
    setAmount(principal * Math.pow(1 + rate / 100, time));
    console.log(principal * Math.pow(1 + rate / 100, time));
  });

  return (
    <>
      <div className="row ">
        <div className="col-12 bg-info opacity-50">
          <EMI_Principal principal={principal} Fn_principal={Fn_principal} />
        </div>
        <div className="col-12 bg-warning opacity-50">
          <EMI_Rate rate={rate} Fn_rate={Fn_rate} />
        </div>
        <div className="col-12 bg-info opacity-50">
          <EMI_Time time={time} Fn_time={Fn_time} />
        </div>
        <div className="col-6 bg-success opacity-50">
          <EMI_Final amount={amount} principal={principal} />
        </div>
        <div className="col-6 bg-warning opacity-50">
          <EMI_Graph amount={amount} principal={principal} />
        </div>
      </div>
    </>
  );
};

export default LiftState;
