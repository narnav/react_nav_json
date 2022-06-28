import React from "react";
import { Outlet } from "react-router-dom";
const Prod = () => {
  return (
    <div>
      Prod
      <Outlet />
    </div>
  );
};

export default Prod;
