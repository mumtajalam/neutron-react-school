import React, { useEffect, useLayoutEffect } from "react";

const HookLayoutEffect = () => {
  useEffect(() => {
    console.log("useEffect......");
  });

  useLayoutEffect(() => {
    console.log("useLayout Effect.......");
  });
  return (
    <div>
      <h1>HookLayoutEffect</h1>
    </div>
  );
};

export default HookLayoutEffect;
