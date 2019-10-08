import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Homepage = () => {
  const [position, setPosition] = useState(9);
  // need to keep position between 1 and 9
  return (
    <div className="container">
      <div className="rectangle-side"></div>
      <div className="rectangle-top"></div>
      <div className="diagonal"></div>
      <div className="square-small">
        <button onClick={() => setPosition(position => position + 1)}>
          <IoIosArrowDown />
        </button>
        <button onClick={() => setPosition(position => position - 1)}>
          <IoIosArrowUp />
        </button>
      </div>
      <div className="polygon"></div>
      <div className="circle" style={{ gridRowStart: position }}></div>
      <div className="footer"></div>
    </div>
  );
};

export default Homepage;
