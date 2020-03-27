import React, {Component } from "react";
import "./Checkboxes.stories";
import "./Checkbox.css";

import blackchecked from "../Icons/blackchecked.png";
import bluechecked from "../Icons/bluechecked.png";
import blueunchecked from "../Icons/blueunchecked.png";
import blackunchecked from "../Icons/blackunchecked.png";



export default class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleCheck: false
    };
  }
  changeCheck = e => {
    e.preventDefault();
    this.setState({ toggleCheck: !this.state.toggleCheck });
  };

  render() {
    return (
      <div className="checkbox" onClick={this.changeCheck}>
        {this.state.toggleCheck ? (
          <div className="checked">
            <img src={this.props.blue ? bluechecked : blackchecked} alt="checkbox"/>
          </div>
        ) : (
          <div className="empty">
            <img src={this.props.blue ? blueunchecked : blackunchecked} alt="checkbox"/>
          </div>
        )}
        <label>{this.props.label}</label>
      </div>
    );
  }
}