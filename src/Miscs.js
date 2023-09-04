import React from "react";
import { Link } from "react-router-dom";

const Miscs = () => {
  const id = "12345";
  return (
    <div>
      <h2>Miscs Component</h2>
      <Link to={`/hookparams/${id}`}>Product Id</Link>
    </div>
  );
};

export default Miscs;
