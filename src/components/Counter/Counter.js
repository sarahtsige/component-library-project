import React, {Component } from "react";
import "./Counter.css";


class Counter extends Component {
  constructor (props){
  super(props);
  this.state = { value: 0 };
  //this.handleClick = this.handleClick.bind(this);
  }

  //method


  render() {
      let classList = "";
      let types = ['counter'];

  //conditionals

  if (types.includes(this.props.type)) {
      classList += ` counter-${this.props.type}`;
      }



  return (
      <div className='counterContainer'>
               <button className='minus'>-</button> <div className='number'>{this.state.value}</div> <button  className='plus'>+</button>
       </div>
    )}
//
  }

export default Counter;