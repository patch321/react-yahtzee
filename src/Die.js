import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

  handleClick = () => {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const wordedNum = ["one", "two", "three", "four", "five", "six"];
    return (
      <button
        className={this.props.locked ? "Die Die-locked" : "Die"}
        onClick={this.handleClick}
      >
        <i className={`fas fa-dice-${wordedNum[this.props.val - 1]} fa-5x Die ${this.props.isRolling && !this.props.locked ? 'Die-rolling' : ''}`}  />
      </button>
    );
  }
}

export default Die;
