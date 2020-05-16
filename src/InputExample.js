import React, { useState } from "react";

const InputExample = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    let text = event.target.value;
    //   no numbers in input
    setText(text.replace(/[0-9]/g, ""));
  };

  return <input type='text' value={text} onChange={handleChange}></input>;
};

export default InputExample;
