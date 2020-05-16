import React, { useRef } from "react";

const RefInput = () => {
  const input = useRef();

  const showValue = () => {
    alert(`Input contains:  ${input.current.value}`);
  };

  return (
    <div>
      <input type='text' ref={input} />
      <button onClick={showValue}>Alert the value</button>
    </div>
  );
};

export default RefInput;
