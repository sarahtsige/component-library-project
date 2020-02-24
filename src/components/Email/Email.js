import React from 'react';
import './Email.css'



const Email = (props) => {

    // Declare a classList variable and set it to an empty string
    let classList = '';

    let types = ['email', 'mediumEmail', 'largeEmail']
    // Add a conditional statement that checks for the type and updates the 
    // classList variable based on their existence.
    if (types.includes(props.type)) {
        classList += ` email-${props.type}`
    }
    // Add another conditional statement to check for additional properties (such as large)
    // and add to the classList variable based on this condition evaluating to true
    if (props.large) {
        classList += ` input-large` // Note the spacing here since we are adding to the string!
    } 
    
    // define call back function to capture email address
    // function getEmail (e) {
    //     let emailValue=e.target.value
    //     console.log(emailValue)
    // }


    return (
    <form>
        <label>Email</label><br></br>
        <input type='text' placeholder='Email' onChange={props.getEmail} className={classList}></input>
    </form>)
}


    export default Email