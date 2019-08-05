import React, { Component } from "react";
import Filter from "../Filter";
import Logger from "../Logger";
import { connect } from "react-redux";
import { cartVisibility } from "../../actions/shoesAction";

export class Navigater extends Component {
  onChange = () => {
    this.props.cartVisibility(this.props.value);
  };
  render() {
    console.log(this.props.value);
    return (
      <nav className="nav">
        <Filter />
        <div>
          <Logger />
        </div>
        <div className="cart">
          <input
            type="checkbox"
            className="checkBox"
            checked={this.props.value}
            onChange={this.onChange}
          />
          <p className="number-items">{this.props.number}</p>
          <i className="fas fa-shopping-cart">
            {" "}
            <p className="cart-text">Check your cart</p>
          </i>
        </div>
      </nav>
    );
  }
}

const mapstateToProps = state => ({
  value: state.shoes.visible,
  number: state.shoes.numberOfItemsSelected
});

export default connect(
  mapstateToProps,
  { cartVisibility }
)(Navigater);
