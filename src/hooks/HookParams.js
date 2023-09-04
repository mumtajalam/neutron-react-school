import React from "react";
import { useParams } from "react-router-dom";

const HookParams = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>ID from caller - Product ID - {id}</h1>
    </div>
  );
};

export default HookParams;
