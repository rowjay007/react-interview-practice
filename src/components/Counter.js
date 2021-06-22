
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleButton = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>You have clicked {count} times</p>
      <button onClick={handleButton}>Click me!</button>
    </div>
  );
};

export default Counter;