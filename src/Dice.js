import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {

  handleClick = () => {
    this.props.handleClick(this.props.idx);
  }

  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die handleClick={this.props.handleClick}
          isRolling={this.props.isRolling}
          val={d}
          locked={this.props.locked[idx]}
          idx={idx}
          key={idx} />
      )}
    </div>
  }
}

export default Dice;
