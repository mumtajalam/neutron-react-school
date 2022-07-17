import React, { useEffect, useLayoutEffect } from "react";

const HookLayoutEffect = () => {
  useEffect(() => {
    console.log("useEffect trigered...");
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect...");
  });
  return (
    <>
      <div>Hook LayoutEffect</div>
    </>
  );
};

export default HookLayoutEffect;
