import React, { useState } from "react";

const TrickInput = () => {
  const [text, setText] = useState("dummy text");

  const handleChange = (event) => {
    setText("haha change");
  };

  return <input type='text' value={text} onChange={handleChange} />;
};

export default TrickInput;
