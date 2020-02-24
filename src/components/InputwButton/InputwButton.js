import React, {Component } from "react";
import "./InputwButtons.stories";






class InputwButtons extends Component {
    constructor (props){
    super(props);
    this.state = { input:'' };
    //this.handleClick = this.handleClick.bind(this);
    }

    //method


    render() {
        let classList = "";
        let types = ['large', 'small'];

    //conditionals

    if (types.includes(this.props.type)) {
        // //     classList += ` input-${props.type}`;
        // //   }

    return (
        <form>
                 <input type='text' placeholder='Voucher Code' className={classList}></input><button>Redeem</button>
         </form>
      )}
// // = props => {
// //   // Declare a classList variable and set it to an empty string
// //   let classList = "";

// //   let types = ['black', 'blue'];
// //   // Add a conditional statement that checks for the type and updates the
// //   // classList variable based on their existence.
// //   if (types.includes(props.type)) {
// //     classList += ` input-${props.type}`;
// //   }
// //   // Add another conditional statement to check for additional properties (such as large)
// //   // and add to the classList variable based on this condition evaluating to true
// //   if (props.large) {
// //     classList += ` input-large`; // Note the spacing here since we are adding to the string!
// //   }

// //   // Give the button's class a value of classList

// //   return (
// //     return(
// //         <form>
// //         <input type='text' placeholder='Voucher Code' className={classList}></input><button>Redeem</button>
// //     </form>
// //     )}
// //   );
    }
};

export default InputwButtons;