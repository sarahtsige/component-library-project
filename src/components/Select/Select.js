import React from 'react';
import './Select.css'



const Select = (props) => {

    // Declare a classList variable and set it to an empty string
    let classList = '';

    let types = ['white', 'gray', 'mediumGray', 'mediumWhite', 'smallGray', 'smallWhite']
    // Add a conditional statement that checks for the type and updates the 
    // classList variable based on their existence.
    if (types.includes(props.type)) {
        classList += ` select-${props.type}`
    }
    // Add another conditional statement to check for additional properties (such as large)
    // and add to the classList variable based on this condition evaluating to true
    if (props.large) {
        classList += ` select-large` // Note the spacing here since we are adding to the string!
    } 
    
    // Give the button's class a value of classList

return(
    <form>
       <select className={classList} id="select">
            <option value="">Select</option>
            <option value="">Select 2</option>
            <option value="">Select 3</option>
        </select>
    </form>
)
}

export default Select;
    