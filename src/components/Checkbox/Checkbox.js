import React, {Component } from "react";
import "./Checkboxes.stories";


class Checkbox extends Component {
  constructor (props){
  super(props);
  this.state = { checked: false };
  //this.handleClick = this.handleClick.bind(this);
  }

  //method


togglecheck() {
  this.setState({ checked: !this.state.checked})
  console.log(this.state.checked)
}

  render() {
      let classList = "";
      let types = ['black', 'blue'];

  //conditionals

  if (types.includes(this.props.type)) {
      classList += ` checkbox-${this.props.type}`;
      }



  return (
      <form>
               <input type="checkbox" onClick={this.check} className={classList}></input>  <label>{this.props.label}</label>
       </form>
    )}
//
  }

export default Checkbox;
