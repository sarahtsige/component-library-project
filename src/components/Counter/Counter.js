import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  //method
  decreaseCounter = () => {
    let value = this.state.value - 1;
    this.setState({ value: value });
  };

  increaseCounter = () => {
    let value = this.state.value + 1;
    this.setState({ value: value });
  };

  render() {
    let types = ["counter"];

    //conditionals

    if (types.includes(this.props.type)) {
    }

    const {prop1, prop2, prop3} = this.props;

    return (
      <div className="counterContainer">
        <button className="minus" onClick={this.decreaseCounter}>
          -
        </button>{" "}
        <div className="number">{this.state.value}</div>{" "}
        <button onClick={this.increaseCounter} className="plus">
          +
        </button>
      </div>
    );
  }
  //
}

export default Counter;
