import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, operation: '', next: '' };
  }

  handleClick = (items) => this.setState((e) => calculate(e, items.target.textContent));

  render() {
    const { total, operation, next } = this.state;
    const display = `${total || operation || next ? `${total || ''} ${operation || ''} ${next || ''}` : '0'} `;
    const buttonsArray = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='].map((keys) => <button type="button" className="button" id={keys)} key={keys} onClick={this.handleClick}>{keys}</button>);
    return (
      <div className="calculator_container">
        <div className="display"><div className="display_string">{display}</div></div>
        <div className="button_container">{buttonsArray}</div>
      </div>
    );
  }
}

export default Calculator;
