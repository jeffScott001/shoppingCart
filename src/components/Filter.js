import React, { Component } from "react";

export class Filter extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." className="filter-input" />
        <i className="fas fa-search" />
      </form>
    );
  }
}

export default Filter;
