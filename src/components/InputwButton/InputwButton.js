import React, {Component } from "react";
import "./InputwButtons.stories";
import "./InputwButton.css"





class InputwButtons extends Component {
    constructor (props){
    super(props);
    this.state = { input:'' };
    //this.handleClick = this.handleClick.bind(this);
    }

    //method


    render() {
        let classListI = "";
        let classListB = "";
        let types = ['large', 'small'];

    //conditionals

    if (types.includes(this.props.type)) {
        classListI += ` input-${this.props.type}`;
        }

    if (types.includes(this.props.type)) {
        classListB += ` button-${this.props.type}`;
        }

    return (
        <form>
                 <input type='text' placeholder='Voucher Code' className={classListI}></input><button className={classListB}>Redeem</button>
         </form>
      )}
//
    }

export default InputwButtons;