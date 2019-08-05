import React, { Component } from "react";
import { connect } from "react-redux";
import {
  numberOfItemsSelected,
  removeItem,
  pushSelectedItems
} from "../../actions/shoesAction";

export class Cart extends Component {
  componentDidMount() {
    this.props.pushSelectedItems();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.items)
      this.props.numberOfItemsSelected(nextProps.items.length);
  }
  style = () => {
    if (this.props.value) {
      return {
        display: "block"
      };
    } else {
      return {
        display: "none"
      };
    }
  };

  onClick = index => {
    this.props.removeItem(index, this.props.items);
    this.forceUpdate();
  };

  render() {
    const { items } = this.props;

    if (items.length > 0 && this.props.value) {
      return (
        <div style={this.style()} className="cart-container">
          <p className="text">Items selected</p>

          {items.map((item, index) => (
            <div key={index} className="item-pic-container">
              <div className="pic-container">
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="item-pic-cart "
                />
              </div>
              <div className="item-details-container">
                <span className="shoe-name">{"shoeName"}</span>
                <span className="shoe-price shoe-price-cart">KSH.{1000}</span>
              </div>
              <div className="trash-kit-container">
                <i
                  className="fas fa-trash-alt"
                  onClick={this.onClick.bind(this, index)}
                />
              </div>
            </div>
          ))}
          <p className="total-cash shoe-price">
            KSH. {this.props.items.length * 1000}
          </p>
        </div>
      );
    } else {
      return (
        <div style={this.style()} className="cart-container">
          <p className="text">Items selected</p>
        </div>
      );
    }
  }
}
const mapstateToProps = state => ({
  value: state.shoes.visible,
  items: state.shoes.selectedItems
});

export default connect(
  mapstateToProps,
  { numberOfItemsSelected, removeItem, pushSelectedItems }
)(Cart);
