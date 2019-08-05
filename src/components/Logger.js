import React, { Component } from "react";

export class Logger extends Component {
  render() {
    return (
      <div className="loggers">
        <button className="btn-loggers">Register</button>
        <button className="btn-loggers">Log In</button>
      </div>
    );
  }
}

export default Logger;
