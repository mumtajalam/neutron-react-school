import React from "react";
import { Link } from "react-router-dom";

const Misc = () => {
  const id = "1234";
  return (
    <>
      <div>Misc Component</div>

      <Link to={`/hookparams/${id}`}>Product Id</Link>
    </>
  );
};

export default Misc;
