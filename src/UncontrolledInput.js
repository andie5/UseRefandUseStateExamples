// App with Labelled text inputs for First Name
// and Last Name, but make them uncontrolled inputs instead. Create refs to the inputs, and add
// a Submit button that, when clicked, will update the display to reflect the values in the inputs.

import React, { useRef, useState } from "react";

// This is an uncontrolled input because there is no value prop in the input
const UncontrolledInput = () => {
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleClick = () => {
    //    current references dom element in the browser and you can get the target value
    // current is part of the react API and we pointing to a dom element so it will have the value property
    console.log("First name: ", firstNameInput.current.value);
    console.log("Last name: ", lastNameInput.current.value);

    setFirstName(firstNameInput.current.value);
    setLastName(lastNameInput.current.value);
  };

  return (
    <div>
      FirstName: <input name='firstName' ref={firstNameInput} />
      LastName: <input name='lastName' ref={lastNameInput} />
      <br />
      <button onClick={handleClick}>Submit Names</button>
      <h1>
        Hello {firstName} {lastName}
      </h1>
    </div>
  );
};

export default UncontrolledInput;
