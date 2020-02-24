import React from 'react';
import './Form.css'



const Form = (props) => {

    // Declare a classList variable and set it to an empty string
    let classList = '';

    let types = ['email', 'mediumEmail', 'largeEmail']
    // Add a conditional statement that checks for the type and updates the 
    // classList variable based on their existence.
    if (types.includes(props.type)) {
        classList += ` input-${props.type}`
    }
    // Add another conditional statement to check for additional properties (such as large)
    // and add to the classList variable based on this condition evaluating to true
    if (props.large) {
        classList += ` input-large` // Note the spacing here since we are adding to the string!
    } 
    
    // Give the button's class a value of classList

    if (props.type ==='email') {
    return (
    <form>
        <label>Email</label><br></br>
        <input type='text' placeholder='Email' className={classList}></input>
    </form>
)} else if(props.type === 'select'){
return(
    <form>
       <select id="select">
            <option value="">Select</option>
            <option value="">Select 2</option>
            <option value="">Select 3</option>
        </select>
    </form>
)}  else if(props.type === 'inputButton'){
    return(
        <form>
        <input type='text' placeholder='Voucher Code' className={classList}></input><button>Redeem</button>
    </form>
    )}






}











export default Form;