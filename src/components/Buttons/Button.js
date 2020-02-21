import React from 'react';
import './Button.css'

const Button = (props) => {

    // Declare a classList variable and set it to an empty string
    let classList = '';

    // Create an array of all of the story/component types you want to be
    // included in your component library
    let types = ['primary', 'danger', 'success', 'warning']

    // Add a conditional statement that checks for the type and updates the 
    // classList variable based on their existence.
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }

    // Add another conditional statement to check for additional properties (such as large)
    // and add to the classList variable based on this condition evaluating to true
    if (props.light) {
        classList += ` button-light` // Note the spacing here since we are adding to the string!
    }
    
    // Give the button's class a value of classList
    return <button className={classList}>{props.label}</button>
}


export default Button;