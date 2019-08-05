import React, { Component } from "react";
export class Paggination extends Component {
  pageNumber = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.props.change(e.target.value);
  };
  render() {
    const { totalItems, state } = this.props;
    const numbers = [];
    if (totalItems && state.length) {
      console.log(totalItems, state.length);

      for (let i = 1; i <= Math.ceil(totalItems / state.length); i++) {
        numbers.push(i);
      }
    }

    return (
      <ul className="pagination">
        {numbers.map((number, index) => (
          <button
            key={index}
            className="list"
            onClick={this.pageNumber}
            value={number}
          >
            {number}
          </button>
        ))}
      </ul>
    );
  }
}

export default Paggination;
