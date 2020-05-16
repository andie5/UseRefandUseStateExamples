import React from "react";

class ControlledInput extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { firstName, lastName } = this.state;

    // I am passing something into the value so this is a controlled prop
    // The reason why the user can change the input is due to the onChange function
    return (
      <div>
        <input
          name='firstName'
          value={firstName}
          onChange={this.handleChange}
        />
        <input name='lastName' value={lastName} onChange={this.handleChange} />
        <br />
        Hello {firstName} {lastName}
      </div>
    );
  }
}

export default ControlledInput;
