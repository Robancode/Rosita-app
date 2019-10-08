import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const PositionCounter = ({ min = 1, max = 9 }) => {
  const [position, setPosition] = useState(9);
  const increment = () => {
    if (position + 1 <= max) {
      setPosition(position + 1);
    }
  };
  const decrement = () => {
    if (position - 1 <= min) {
      setPosition(position - 1);
    }
  };
  return (
    <div>
      <button onClick={decrement}>
        <IoIosArrowDown />
      </button>
      <button onClick={increment}>
        <IoIosArrowUp />
      </button>
    </div>
  );
};

export default PositionCounter;
