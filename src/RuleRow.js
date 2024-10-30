import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    return (
      // <tr className="RuleRow RuleRow-active" onClick={this.props.doScore}>
      <tr className={this.props.score ? 'RuleRow RuleRow-disabled' : ' RuleRow RuleRow-active'} onClick={this.props.score ? null : this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        {this.props.score ? <td className="RuleRow-score">{this.props.score}</td> : <td className="RuleRow-score RuleRow-active">{this.props.description}</td>}
      </tr>
    )
  }
}

export default RuleRow;
