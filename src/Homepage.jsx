import React, { useState } from "react";
import PositionCounter from "./PositionCounter";

const Homepage = () => {
  return (
    <div className="container">
      <div className="rectangle-side"></div>
      <div className="rectangle-top"></div>
      <div className="diagonal"></div>
      <div className="square-small">
        <PositionCounter />
      </div>
      <div className="polygon"></div>
      <div className="circle" style={{ gridRowStart: position }}></div>
      <div className="footer"></div>
    </div>
  );
};

export default Homepage;
