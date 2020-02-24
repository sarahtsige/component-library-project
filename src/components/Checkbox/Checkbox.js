import React from "react";
import "./Checkboxes.stories";

const Checkbox = props => {
  // Declare a classList variable and set it to an empty string
  let classList = "";

  let types = ['black', 'blue'];
  // Add a conditional statement that checks for the type and updates the
  // classList variable based on their existence.
  if (types.includes(props.type)) {
    classList += ` input-${props.type}`;
  }
  // Add another conditional statement to check for additional properties (such as large)
  // and add to the classList variable based on this condition evaluating to true
  if (props.large) {
    classList += ` input-large`; // Note the spacing here since we are adding to the string!
  }

  // Give the button's class a value of classList

  return (
    <form>
      <input type="checkbox" className={classList}></input>
      <label>{props.label}</label>
    </form>
  );
};

export default Checkbox;
