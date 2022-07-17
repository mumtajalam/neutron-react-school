import React from "react";
import { useParams } from "react-router-dom";

const HookParams = () => {
  const { id } = useParams();
  return (
    <>
      <div>ID from caller - Product ID - {id}</div>
    </>
  );
};

export default HookParams;
